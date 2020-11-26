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
            _dbContext.Add<Alarm>(alarm);
            _dbContext.Commit();
            return alarm.ID;
        }

        public List<Alarm> GetAlarms()
        {
            return _dbContext.Alarms.Select(x=>x).ToList();
        }
    }
}
