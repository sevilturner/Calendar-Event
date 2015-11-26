using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.Entity;
using DHTMLX.Scheduler;
using DHTMLX.Common;
using DHTMLX.Scheduler.Data;
using DHTMLX.Scheduler.Controls;
using Calendar_Event.Models;
using Calendar_Event.Infrastructure;

namespace Calendar_Event.Controllers
{
    public class CalendarController : Controller
    {
        private CalendarDb db = new CalendarDb();

        public ActionResult Index()
        {
            var scheduler = new DHXScheduler(this);            
 
            scheduler.InitialDate = DateTime.Now;
            scheduler.LoadData = true;
            scheduler.EnableDataprocessor = true;

            return View(scheduler);
        }

        public ContentResult Data()
        {
            var data = new SchedulerAjaxData(db.Calendar.ToList());
            return (ContentResult)data;
        }

        private int Insert(CalendarEvent eventInsert)
        {
            db.Calendar.Add(eventInsert);
            db.SaveChanges();

            return eventInsert.id;
        }

        public void Update(CalendarEvent eventUpdate)
        {
            var dataUpdate = db.Calendar.Find(eventUpdate.id);

            dataUpdate.Location = eventUpdate.Location;
            dataUpdate.Description = eventUpdate.Description;
            dataUpdate.Title = eventUpdate.Title;
            dataUpdate.text = eventUpdate.text;
            dataUpdate.start_date = eventUpdate.start_date;
            dataUpdate.end_date = eventUpdate.end_date;

            db.SaveChanges();
        }

        private void Delete(CalendarEvent eventDelete)
        {
            var dataDelete = db.Calendar.Find(eventDelete.id);
            db.Calendar.Remove(dataDelete);
            db.SaveChanges();
        }

        [HttpPost]
        public ContentResult Save(int? id, FormCollection actionValues)
        {
            var action = new DataAction(actionValues);
            
            try
            {
                var changedEvent = (CalendarEvent)DHXEventsHelper.Bind(typeof(CalendarEvent), actionValues);

                switch (action.Type)
                {
                    case DataActionTypes.Insert:
                        action.TargetId = Insert(changedEvent);
                        break;
                    case DataActionTypes.Delete:

                        Delete(changedEvent);

                        break;
                    default:
                        Update(changedEvent);
                        break;
                }
            }
            catch
            {
                action.Type = DataActionTypes.Error;
            }
            return (ContentResult)new AjaxSaveResponse(action);
        }
    }
}

