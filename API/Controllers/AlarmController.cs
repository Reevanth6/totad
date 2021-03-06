﻿using App;
using App.Interface;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Globalization;
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
                var res = _alarmApp.GetAlarms();
                res.ForEach(x => x.Time = convertTime(x.Time));
                return res;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in Get");
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

        [HttpDelete]
        [Route("[controller]")]
        public ActionResult Delete(int id)
        {
            try
            {
                _alarmApp.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in Delete alarm : " + id);
                return null;
            }
        }

        [HttpPost]
        [Route("[controller]/UpdateIp")]
        public void UpdateIp(string newIp)
        {
            ip = newIp;
        }

        [HttpGet]
        [Route("[controller]/getAlarm")]
        public Object GetAlarm()
        {
            try
            {
                var alarm = _alarmApp.GetAlarm();
                if (alarm == null)
                    return null;
                return new
                {
                    id = alarm.ID,
                    device = !string.IsNullOrWhiteSpace(alarm?.DeviceName) ? alarm.DeviceName.Split('|').ToList() : null,
                    language = alarm.Language ?? "",
                    daily = alarm.Daily,
                    enable = alarm.Enable,
                    date = alarm.Date ?? "",
                    time = convertTime(alarm.Time) ?? "",
                    text = alarm.Text ?? "",
                    repetition = alarm.Repetition,
                    announcement = alarm.Announcement,
                    mp3Url = alarm.Mp3Url,
                    volume= alarm.Volume,
                    url= alarm.URL
                };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in ValidateUser");
                return null;
            }
        }

        [HttpGet]
        [Route("[controller]/getAlarmById")]
        public Object GetAlarmById(int id)
        {
            try
            {
                var alarm = _alarmApp.GetAlarmById(id);
                if (alarm == null)
                    return null;
                return new
                {
                    id = alarm.ID,
                    device = !string.IsNullOrWhiteSpace(alarm?.DeviceName) ? alarm.DeviceName.Split('|').ToList() : null,
                    language = alarm.Language ?? "",
                    daily = alarm.Daily,
                    enable = alarm.Enable,
                    date = alarm.Date ?? "",
                    time = convertTime(alarm.Time) ?? "",
                    text = alarm.Text ?? "",
                    repetition = alarm.Repetition,
                    announcement = alarm.Announcement,
                    mp3Url = alarm.Mp3Url,
                    volume = alarm.Volume,
                    url = alarm.URL
                };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in ValidateUser");
                return null;
            }
        }

        [HttpPost]
        [Route("[controller]/deleteAll")]
        public ActionResult DeleteAll()
        {
            try
            {
                _alarmApp.DeleteAll();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed in Delete all alarm");
                return null;
            }
        }

        string convertTime(string str)
        {
            DateTime date;
            if(DateTime.TryParseExact(str, "HH:mm", new CultureInfo("en-US"), DateTimeStyles.None, out date))
                return date.ToString("hh:mm tt");
            return null;
        }

    }
}
