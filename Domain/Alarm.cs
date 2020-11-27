using System;

namespace Domain
{
    public class Alarm : IdentityObjectBase
    {
        public string DeviceName { get; set; }
        public string Language { get; set; }
        public bool Daily { get; set; }
        public bool Enable { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string Text { get; set; }
        public int Repetition { get; set; }
        public int Volume { get; set; }
        public string URL { get; set; }
        public int Count { get; set; }
        public bool Announcement { get; set; }

        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string IP { get; set; }
    }
}
