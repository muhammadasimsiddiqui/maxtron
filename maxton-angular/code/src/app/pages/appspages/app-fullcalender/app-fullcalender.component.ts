import { Component } from '@angular/core';
// Full Calendar
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// Data Get
import { calendarEvents } from './data';


@Component({
  selector: 'app-app-fullcalender',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './app-fullcalender.component.html',
  styleUrl: './app-fullcalender.component.scss'
})
export class AppFullcalenderComponent {

  /***
  * Calender Set
  */
 
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
    ],
    headerToolbar: {
      left: 'prevYear,prev,next,nextYear',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    buttonText: {
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
    initialEvents: calendarEvents
  };

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr);
  }
}
