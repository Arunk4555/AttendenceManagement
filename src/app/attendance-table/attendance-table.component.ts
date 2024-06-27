import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AttendanceService } from '../attendance.service';
@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrl: './attendance-table.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AttendanceTableComponent implements OnInit {
  @Input()attendanceData: { name: string, date: string, present: boolean }[] = [];
  
  constructor(private attendanceService: AttendanceService) { }
  ngOnInit(): void {
    this.attendanceService.currentAttendanceData.subscribe(data => this.attendanceData = data);
  }
} 
