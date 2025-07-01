using API_v1.Model;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace API_v1.Controllers
{

    [Route("profile")]
    [Authorize]
    [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    public class ProfileController : Controller
    {


        [HttpGet("")]
        public Task<IActionResult> AmIEvil()
        {
            var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            Console.WriteLine(userId);
            try
            {
                // Путь к вашему JSON файлу
                string jsonFilePath = $"Data/UsersPhoto/{userId}/example.json";

                if (!System.IO.File.Exists(jsonFilePath))
                {
                    return Task.FromResult<IActionResult>(NotFound("Dont found image"));
                }

                string jsonData = System.IO.File.ReadAllText(jsonFilePath);

                var profileData = JsonConvert.DeserializeObject<string[]>(jsonData);

                return Task.FromResult<IActionResult>(Ok(profileData));
            }
            catch (Exception ex)
            {
                return Task.FromResult<IActionResult>(StatusCode(500, $"Internal server error: {ex.Message}"));
            }
        }

        [HttpPost("logout")]
        public async Task<IActionResult> LogOff()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok("Пользователь успешно вышел");
        }
    }
}
