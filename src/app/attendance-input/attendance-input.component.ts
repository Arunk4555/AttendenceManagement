import { Component, EventEmitter, Output } from '@angular/core';
import { AttendanceService } from '../attendance.service';
@Component({
  selector: 'app-attendance-input',
  templateUrl: './attendance-input.component.html',
  styleUrl: './attendance-input.component.css'
})
export class AttendanceInputComponent {
  name: string = '';
  date: string = '';
  present: boolean = false;

  @Output() addAttendance = new EventEmitter<{ name: string, date: string, present: boolean }>();

  onSubmit() {
    if (this.name && this.date) {
      this.addAttendance.emit({ name: this.name, date: this.date, present: this.present });
      this.name = '';
      this.date = '';
      this.present = false;
      alert("attendance added");
    }
  }
}
