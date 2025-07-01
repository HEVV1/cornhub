using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace API_v1.Model
{
    public class UserModel: IdentityUser
    {
        [Key]
        public int UserId { get; set; }
        public required bool SuccesEmail { get; set; }
        public required string Password { get; set; }
        public required bool Premium { get; set; }
    }
}
