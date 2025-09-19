import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
export function createEventId() {
    return String(eventGuid++);
}

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
const calendarEvents: EventInput[] = [
    {
        id: createEventId(),
        title: 'All Day Event',
        date: "2024-07-01",
        className: 'primary-bg text-white p-1 border-0',
    },
    {
        id: createEventId(),
        title: 'Long Event',
        start: new Date(y, m, d - 22, 0, 0),
        end: new Date(y, m, d - 19, 0, 0),
        allDay: true,
        className: 'primary-bg text-white p-1 border-0',
    },
    {
        id: createEventId(),
        title: 'Repeating Event',
        start: new Date(y, m, d - 20, 4, 0),
        end: new Date(y, m, d - 20, 4, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Conference',
        start: new Date(y, m, d - 18, 0, 0),
        end: new Date(y, m, d - 16, 0, 0),
        allDay: true,
        className: 'primary-bg text-white p-1 border-0',
    },
    {
        id: createEventId(),
        title: 'Meeting',
        start: new Date(y, m, d - 17, 10, 30),
        end: new Date(y, m, d - 17, 4, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Lunch',
        start: new Date(y, m, d - 17, 12, 0),
        end: new Date(y, m, d - 17, 4, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Meeting',
        start: new Date(y, m, d - 17, 14, 30),
        end: new Date(y, m, d - 17, 2, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Happy Hour',
        start: new Date(y, m, d - 17, 17, 30),
        end: new Date(y, m, d - 17, 2, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Dinner',
        start: new Date(y, m, d - 17, 20, 0),
        end: new Date(y, m, d - 17, 2, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Birthday Party',
        start: new Date(y, m, d - 16, 7, 0),
        end: new Date(y, m, d - 16, 2, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Repeating Event',
        start: new Date(y, m, d - 13, 7, 0),
        end: new Date(y, m, d - 13, 2, 0 ),
        className: '',
    },
    {
        id: createEventId(),
        title: 'Click for Google',
        start: new Date(y, m, d - 1, 7, 0),
        end: new Date(y, m, d - 1, 16, 0),
        allDay: true,
        className: 'primary-bg text-white p-1 border-0',
    }
];

export { calendarEvents };
