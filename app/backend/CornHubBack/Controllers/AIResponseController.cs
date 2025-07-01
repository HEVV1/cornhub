using API_v1.Model;
using API_v1.Servic;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API_v1.Controllers
{

    [Route("generate")]
    public class AIResponseController : Controller
    {
        private readonly UserManager<UserModel> _userManager;

        public AIResponseController(UserManager<UserModel> userManager)
        {
            _userManager = userManager;
        }
        [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GenerateAsync()
        {
            var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            var user = await _userManager.FindByNameAsync(userId);

            Console.WriteLine($"User ID: {userId}");

            StreamReader reader = new(Request.Body);
            string requestBody = await reader.ReadToEndAsync();
            Console.WriteLine(requestBody);

            string result = await ApiService.SendRequest(requestBody, userId);

            return Content(result);

        }
    }

}
