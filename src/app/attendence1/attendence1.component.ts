import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';
@Component({
  selector: 'app-attendence1',
  templateUrl: './attendence1.component.html',
  styleUrl: './attendence1.component.css'
})
export class Attendence1Component {
  title: 'project4u' | undefined;
  attendanceData: { name: string, date: string, present: boolean }[] = [];

  constructor(private attendanceService: AttendanceService) {
    this.attendanceService.currentAttendanceData.subscribe(data => this.attendanceData = data);
  }

  addAttendance(data: { name: string, date: string, present: boolean }) {
    this.attendanceService.addAttendance(data);
  }


}
