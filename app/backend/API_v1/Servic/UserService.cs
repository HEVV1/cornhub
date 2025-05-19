using API_v1.Model;
using Microsoft.Extensions.Caching.Memory;
using System.Linq;

namespace API_v1.Servic
{
    public class UserService
    {
        IMemoryCache cache;
        private readonly ApplicationContext _db;

        public UserService(IMemoryCache memoryCache, ApplicationContext db)
        {
            cache = memoryCache;
            _db = db;
        }
        public async Task<UserModel?> GetUser(string email)
        {
            
                // пытаемся получить данные из кэша
            cache.TryGetValue(email, out UserModel? user);
            // если данные не найдены в кэше
            if (user == null)
            {
                // обращаемся к базе данных
                user = _db.UserModel.FirstOrDefault(u => u.Email == email);
                // если пользователь найден, то добавляем в кэш - время кэширования 5 минут
                if (user != null)
                {
                    Console.WriteLine($"{user.Email} извлечен из базы данных {user.UserId}");
                    cache.Set(user.Email, user, new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromMinutes(30)));
                }
                else
                {
                    return null;
                }
            }
            else
            {
                Console.WriteLine($"{user.Email} извлечен из кэша");
            }
            return user;
        }
      
    }
}
