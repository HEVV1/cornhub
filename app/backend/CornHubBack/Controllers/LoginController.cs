using API_v1.Model;
using API_v1.Servic;
using CornHubBack.Servic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;


namespace API_v1.Controllers
{
    [Route("")]
    [AllowAnonymous]
    public class LoginController : Controller
    {
        private readonly UserService _userService;
        private readonly ApplicationContext _db;
        private readonly UserManager<UserModel> _userManager;
        private readonly JwtTokenService _tokenService;

        public LoginController(UserService cacheService, ApplicationContext db, UserManager<UserModel> userManager)
        {
            _userManager = userManager;
            _userService = cacheService;
            _db = db;
        }

        [HttpPost("login")]
        public IActionResult Index(Persona loginData)
        {
            UserModel? user = _userService.GetUser(loginData.Email);

            if (user == null)
            {
                Console.WriteLine("адрес электронной почты не найден");
                return new UnauthorizedResult();
            }
            else if (user.Password != loginData.Password)
            {
                Console.WriteLine("пароли не совпадают");
                return new UnauthorizedResult();
            }

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
            HttpContext.SignInAsync(
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
            HttpContext.SignInAsync(
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
        }

    }

    public record class Persona(string Email, string Password);
}
