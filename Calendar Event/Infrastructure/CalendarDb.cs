using Calendar_Event.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Calendar_Event.Infrastructure
{
    public class CalendarDb : DbContext
    {
        public CalendarDb()
            : base("DefaultConnection")
        {

        }

        public DbSet<CalendarEvent> Calendar { get; set; }
    }
}