using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly  IUserApp _userApp;

        public UserController(ILogger<UserController> logger, IUserApp userApp)
        {
            _logger = logger;
            _userApp = userApp;
        }

        [HttpGet]
        public bool Get(string email,string password)
        {
            try{
                return _userApp.ValidateUser(email,password);
            }
            catch(Exception ex){
                _logger.LogError(ex, "Failed in ValidateUser");
                return false;
            }
        }

        [HttpPost]
        public int Post([FromBody]User user)
        {
            try{
                return _userApp.RegisterUser(user);
            }
            catch(Exception ex){
                _logger.LogError(ex, "Failed in RegisterUser");
                return 0;
            }
        }
    }
}
