import { Component } from '@angular/core';
import { AttendanceService } from '../attendance.service';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrl: './import.component.css'
})
export class ImportComponent {
  attendanceData: { name: string, date: string, present: boolean }[] = [];

  constructor(private attendanceService: AttendanceService) {
    this.attendanceService.currentAttendanceData.subscribe(data => this.attendanceData = data);
  }

  addAttendance(data: { name: string, date: string, present: boolean }) {
    this.attendanceData.push(data);
  }
}
