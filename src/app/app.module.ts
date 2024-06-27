import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { AuthenticationService } from './authentication.service';
import { Attendence1Component } from './attendence1/attendence1.component';
import { AttendanceExportComponent } from './attendance-export/attendance-export.component';
import { AttendanceInputComponent } from './attendance-input/attendance-input.component';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { ImportComponent } from './import/import.component';
import { TableComponent } from './table/table.component';
import { ExportComponent } from './export/export.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AdminLoginComponent,
    UserloginComponent,
    ServicepageComponent,
    AboutpageComponent,
    Attendence1Component,
    AttendanceExportComponent,
    AttendanceInputComponent,
    AttendanceTableComponent,
    EmployeeComponent,
    ContactuspageComponent,
    ImportComponent,
    TableComponent,
    ExportComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
