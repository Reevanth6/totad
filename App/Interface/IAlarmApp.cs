using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace App.Interface
{
    public interface IAlarmApp
    {
        List<Alarm> GetAlarms();

        int AddAlarm(Alarm alarm);

    }
}
