using App.Interface;
using Domain;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;

namespace App
{
    public class AlarmApp : IAlarmApp
    {
        private readonly CoreDBContext _dbContext;
        public AlarmApp(CoreDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int AddAlarm(Alarm alarm)
        {
            if(alarm.ID == 0) 
                _dbContext.Add<Alarm>(alarm);
            else
            {
                var dbAlarm = _dbContext.Find<Alarm>(alarm.ID);
                dbAlarm.Language = alarm.Language;
                dbAlarm.DeviceName = alarm.DeviceName;
                dbAlarm.Daily = alarm.Daily;
                dbAlarm.Enable = alarm.Enable;
                dbAlarm.Date = alarm.Date;
                dbAlarm.Time = alarm.Time;
                dbAlarm.Text = alarm.Text;
                dbAlarm.Repetition = alarm.Repetition;
                dbAlarm.Announcement = alarm.Announcement;
            }
            _dbContext.Commit();
            return alarm.ID;
        }

        public List<Alarm> GetAlarms()
        {
            return _dbContext.Alarms.Select(x=>x).ToList();
        }

        public void Delete(int id)
        {
            var alarm = _dbContext.Alarms.FirstOrDefault(x => x.ID == id);
            _dbContext.Remove(alarm);
            _dbContext.Commit();
        }

        public void DeleteAll()
        {
            _dbContext.RemoveRange(_dbContext.Alarms.Select(x => x));
            _dbContext.Commit();
        }

        public Alarm GetAlarm()
        {
            return _dbContext.Alarms.OrderByDescending(x => x.ID).FirstOrDefault();
        }

        public Alarm GetAlarmById(int id)
        {
            return _dbContext.Alarms.FirstOrDefault(x=>x.ID == id);
        }
    }
}
