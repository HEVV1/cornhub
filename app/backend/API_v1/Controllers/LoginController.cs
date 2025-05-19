using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Caching.Memory;
using API_v1.Servic;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using API_v1.Model;
using Microsoft.AspNetCore.Identity;


namespace API_v1.Controllers
{
    [Route("")]
    [AllowAnonymous]
    public class LoginController : Controller
    {
        UserService userService;
        private readonly ApplicationContext _db;
        private readonly UserManager<UserModel> _userManager;

        public LoginController(UserService cacheService, ApplicationContext db, UserManager<UserModel> userManager)
        {
            _userManager = userManager;
            userService = cacheService;
            _db = db;

        }
        //Вход 
        [HttpPost("login")]
        public async Task<IActionResult> Index(Persona loginData)
        {
            UserModel user = await userService.GetUser(loginData.Email);

            if (user == null)
            {
                Console.WriteLine("адрес электронной почты не найден");
                return new UnauthorizedResult();
            }
            else if(user.Password != loginData.Password){
                Console.WriteLine("пароли не совпадают");
                return new UnauthorizedResult();
            }

            // Возвращаем успешный результат
/*            if (await _userManager.IsEmailConfirmedAsync(user))
            {*/
                var claims = new List<Claim> { new(ClaimTypes.NameIdentifier, user.Id.ToString()) };

                var token = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: claims,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(5)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256)
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

                // Установка аутентификационных куки с JWT токеном
                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme)),
                    new AuthenticationProperties
                    {
                        IsPersistent = true,
                        AllowRefresh = true,
                        ExpiresUtc = DateTime.UtcNow.AddMinutes(1)
                    });

            var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme, ClaimTypes.Name, ClaimTypes.Role);
            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()));
            var principal = new ClaimsPrincipal(identity);
            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                principal,
                new AuthenticationProperties
                {
                    IsPersistent = true,
                    AllowRefresh = true,
                    ExpiresUtc = DateTime.UtcNow.AddMinutes(1)
                });

                var response = new
                {
                    access_token = tokenString,
                    Id = user.Id,
                    expires = token.ValidTo
                };

                return Ok();
/*            }*/
/*            return BadRequest("Вы не подтвердили свой email");
*/
        }

    }
    public record class Persona(string Email, string Password);
}
