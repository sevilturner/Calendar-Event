using System;

namespace Calendar_Event.Models
{
    public class CalendarEvent
    {
        //id, text, start_date and end_date properties are mandatory
        public int id { get; set; }

        public string text { get; set; }
        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }

        public string Location { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
    }
}

       