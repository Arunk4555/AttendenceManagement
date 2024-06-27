import { Component, Input } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-export',
  templateUrl: './attendance-export.component.html',
  styleUrl: './attendance-export.component.css'
})
export class AttendanceExportComponent {
  @Input() attendanceData: { name: string, date: string, present: boolean }[] = [];
  logoUrl: string = 'assets/logo.png'; // Ensure your logo is placed in the assets folder
  startDate: string = '';
  endDate: string = '';

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceService.currentAttendanceData.subscribe(data => this.attendanceData = data);
  }

  async onExport() {
    const filteredData = this.attendanceData.filter(item => {
      const itemDate = new Date(item.date);
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      return itemDate >= start && itemDate <= end;
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Attendance');

    // Fetch the image as a blob
    const response = await fetch(this.logoUrl);
    const imageBlob = await response.blob();

    // Convert blob to base64
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = async () => {
      const base64data = reader.result as string;

      // Add image to workbook
      const logoId = workbook.addImage({
        base64: base64data.split(',')[1],
        extension: 'png'
      });

      worksheet.addImage(logoId, {
        tl: { col: 0, row: 0 },
        ext: { width: 500, height: 500 },
        editAs: 'oneCell'
      });

      // Add table headers
      worksheet.columns = [
        { header: 'Name', key: 'name', width: 20 },
        { header: 'Date', key: 'date', width: 15 },
        { header: 'Present', key: 'present', width: 10 }
      ];

      // Add rows
      filteredData.forEach(item => {
        worksheet.addRow(item);
      });
      const buffer = await workbook.xlsx.writeBuffer();
      saveAs(new Blob([buffer]), 'Attendance.xlsx');
    };
  }

}




