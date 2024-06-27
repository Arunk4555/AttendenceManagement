import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  attendanceData: { name: string, date: string, present: boolean }[] = [];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceService.currentAttendanceData.subscribe(data => this.attendanceData = data);
  }

}
