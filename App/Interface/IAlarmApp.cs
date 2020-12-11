using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace App.Interface
{
    public interface IAlarmApp
    {
        List<Alarm> GetAlarms();
        Alarm GetAlarm();
        Alarm GetAlarmById(int id);

        int AddAlarm(Alarm alarm);
        void Delete(int id);
        void DeleteAll();

    }
}
