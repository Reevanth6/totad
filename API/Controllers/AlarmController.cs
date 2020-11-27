using App;
using App.Interface;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    public class AlarmController : ControllerBase
    {
        private readonly ILogger<AlarmController> _logger;
        private readonly IAlarmApp _alarmApp;
        static string ip = "254.254.254.254";

        public AlarmController(ILogger<AlarmController> logger, IAlarmApp userApp)
        {
            _logger = logger;
            _alarmApp = userApp;
        }

        [HttpGet]
        [Route("[controller]")]
        public Object Get()
        {
            try
            {
                return new
                {
                    Alarms = _alarmApp.GetAlarms(),
                    ip = ip
                };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in ValidateUser");
                return null;
            }
        }

        [HttpPost]
        [Route("[controller]")]
        public int Post([FromBody] Alarm alarm)
        {
            try
            {
                alarm.IP = ip;
                alarm.CreatedOn = DateTime.UtcNow;
                return _alarmApp.AddAlarm(alarm);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in Add Alarm");
                return 0;
            }
        }

        [HttpPost]
        [Route("[controller]/UpdateIp")]
        public void UpdateIp(string newIp)
        {
            ip = newIp;
        }
    }
}
