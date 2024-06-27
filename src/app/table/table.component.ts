import { Component } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  attendanceData: { name: string, date: string, present: boolean }[] = [];
  constructor(private attendanceService: AttendanceService) {
    this.attendanceService.currentAttendanceData.subscribe(data => this.attendanceData = data);
  }

  addAttendance(data: { name: string, date: string, present: boolean }) {
    this.attendanceData.push(data);
  }

}
