import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private storageKey = 'attendanceData';
  private attendanceData: BehaviorSubject<{ name: string, date: string, present: boolean }[]>;




  constructor() { 
    const storedData = localStorage.getItem(this.storageKey);
    this.attendanceData = new BehaviorSubject<{ name: string, date: string, present: boolean }[]>(storedData ? JSON.parse(storedData) : []);


  }
  get currentAttendanceData() {
    return this.attendanceData.asObservable();
  }

  addAttendance(data: { name: string, date: string, present: boolean }) {
    const currentData = this.attendanceData.getValue();
    const updatedData = [...currentData, data];
    this.attendanceData.next(updatedData);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedData));
  }

  getAttendanceData() {
    return this.attendanceData.getValue();
  }

}
