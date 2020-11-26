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
    public class AlarmController : ControllerBase
    {
        private readonly ILogger<AlarmController> _logger;
        private readonly IAlarmApp _alarmApp;

        public AlarmController(ILogger<AlarmController> logger, IAlarmApp userApp)
        {
            _logger = logger;
            _alarmApp = userApp;
        }

        [HttpGet]
        public List<Alarm> Get()
        {
            try
            {
                return _alarmApp.GetAlarms();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in ValidateUser");
                return null;
            }
        }

        [HttpPost]
        public int Post([FromBody] Alarm alarm)
        {
            try
            {
                return _alarmApp.AddAlarm(alarm);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in Add Alarm");
                return 0;
            }
        }
    }
}
