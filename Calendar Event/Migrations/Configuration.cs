namespace Calendar_Event.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Calendar_Event.Infrastructure.CalendarDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Calendar_Event.Infrastructure.CalendarDb context)
        {

        }
    }
}
