using System;
using System.Linq;
using Domain;
using Persistance;

namespace App
{
    public class UserApp : IUserApp
    {
        private readonly CoreDBContext _dbContext;
        public UserApp(CoreDBContext dbContext){
            _dbContext = dbContext;
        }

        public int RegisterUser(User user)
        {
            if(!string.IsNullOrEmpty(user.EmailAddress)){
                _dbContext.Add<User>(user);
            }
            _dbContext.Commit();
            return user.ID;
        }

        public bool ValidateUser(string email, string password)
        {
            var user = _dbContext.Users.FirstOrDefault(x=>x.EmailAddress.Trim().ToLower() == email.Trim().ToLower());
            return user != null && user.Password == password;
        }

        public void Reset(string email)
        {
            var user = _dbContext.Users.FirstOrDefault(x=>x.EmailAddress.Trim().ToLower() == email.Trim().ToLower());
            if(user != null)
            {
                user.Password = "Password@123";
                _dbContext.Commit();
            }
        }
    }
}
