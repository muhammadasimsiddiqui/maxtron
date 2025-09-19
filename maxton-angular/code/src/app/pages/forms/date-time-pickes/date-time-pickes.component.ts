// import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SmallCalendarComponent } from './small-calendar/small-calendar.component';
import { Component, Injectable } from '@angular/core';
import {
	NgbDatepicker,
	NgbDatepickerKeyboardService,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';



const Key = {
	PageUp: 'PageUp',
	PageDown: 'PageDown',
	End: 'End',
	Home: 'Home',
};



@Injectable()	
export class CustomKeyboardService extends NgbDatepickerKeyboardService {
  override processKey(event: KeyboardEvent, dp: NgbDatepicker) {
    // Your custom logic here
	const state = dp.state;
		switch (event.code) {
			case Key.PageUp:
				dp.focusDate(dp.calendar.getPrev(state.focusedDate, event.altKey ? 'y' : 'm'));
				break;
			case Key.PageDown:
				dp.focusDate(dp.calendar.getNext(state.focusedDate, event.altKey ? 'y' : 'm'));
				break;
			case Key.End:
				dp.focusDate(event.altKey ? state.maxDate : state.lastDate);
				break;
			case Key.Home:
				dp.focusDate(event.altKey ? state.minDate : state.firstDate);
				break;
			default:
				super.processKey(event, dp);
				return;
		}
		event.preventDefault();
		event.stopPropagation();
	}
}
@Component({
  // declarations: [
  //   AppComponent,
  //   SmallCalendarComponent
  // ],
  selector: 'app-date-time-pickes',
  standalone: true,
  imports: [ NgbDatepickerModule, FormsModule],
  templateUrl: './date-time-pickes.component.html',
  styleUrl: './date-time-pickes.component.scss',
  providers: [{ provide: NgbDatepickerKeyboardService, useClass: CustomKeyboardService }],

})
export class DateTimePickesComponent {
  // model1: { yea	r: number, month: number, day: number };
  model: NgbDateStruct = { year: 2020, month: 1, day: 1 }; // Initialize with a default value

  formattedDate: any;
  constructor() {
    // Alternatively, you can initialize it here
    // this.model = { year: 2020, month: 1, day: 1 };
  }
  
  onDateChange(newDate: { year: number; month: number; day: number }) {
    this.model = newDate;
  }

  onDateSelect(event: any) {
    // Your logic here
  }
}
