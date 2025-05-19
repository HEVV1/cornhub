using API_v1.Model;
using API_v1.Servic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Intrinsics.X86;

namespace API_v1.Controllers
{
    [Route("registrate")]
    public class RegistrateController : Controller
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly ApplicationContext _db;

        UserService userService;
        public RegistrateController(UserService cacheService, UserManager<UserModel> userManager, ApplicationContext db)
        {
            userService = cacheService;
            _userManager = userManager;
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Index(UserModel InfoUser)
        {

            // Проверяем, что имя пользователя и адрес электронной почты не пустые
            if (string.IsNullOrEmpty(InfoUser.UserName) || string.IsNullOrEmpty(InfoUser.Email) || string.IsNullOrEmpty(InfoUser.Password))
            {
                return Unauthorized("Имя пользователя и адрес электронной почты должны быть заполнены");
            }

            // Проверяем, что пользователь с таким именем пользователя или адресом электронной почты не существует
            UserModel user = await userService.GetUser(InfoUser.Email);

            if (user == null)
            {
                // Добавляем нового пользователя
                var User = new UserModel
            Console.WriteLine(user);
            if (user == null)
            {
                // Добавляем нового пользователя
                user = new UserModel
                {
                    UserName = InfoUser.UserName,
                    Email = InfoUser.Email,
                    SuccesEmail = false,
                    Password = InfoUser.Password,
                    Premium = false
                };

                var result = await _userManager.CreateAsync(User, InfoUser.Password);
                if (result.Succeeded)
                {
                    // генерация токена для пользователя
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(User);
                    Console.WriteLine(code);
                    var callbackUrl = Url.Action(
                        "ConfirmEmail",
                        "registrate",
                        new { userId = User.Id, code = code },
                        protocol: HttpContext.Request.Scheme);
                    EmailService emailService = new EmailService();
                    Console.WriteLine("-----------------");
                    Console.WriteLine(callbackUrl);
                    await emailService.SendEmailAsync(InfoUser.Email, "Confirm your account",
                        $"Подтвердите регистрацию, перейдя по ссылке: {callbackUrl}");

                    return Ok("Пользователь зарегистрирован");
                }
                else
                {
/*                    Console.WriteLine("dadssadsadsad");
                    Console.WriteLine(result);*/

                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                    return Unauthorized(result);
                }
                _db.UserModel.Add(user);
                _db.SaveChanges();
                Console.WriteLine("+++++");
                Console.WriteLine(user);
                user = await userService.GetUser(InfoUser.Email);


                // генерация токена для пользователя
                var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                var callbackUrl = Url.Action(
                    "ConfirmEmail",
                    "Account",
                    new { userId = user.Email, code = code },
                    protocol: HttpContext.Request.Scheme);
                EmailService emailService = new EmailService();
                Console.WriteLine(callbackUrl);
                await emailService.SendEmailAsync(user.Email, "Confirm your account",
                    $"Подтвердите регистрацию, перейдя по ссылке: {callbackUrl}");

                return Content("da");
            }
            else
            {
                return Unauthorized("Пользователь с таким адресом электронной почты уже существует");
            }
        }
        
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return View("Error");
            }
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return View("Error");
            }
            var result = await _userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
                return RedirectToAction("Index", "Home");
            else
                return View("Error");
        }

    }
}
