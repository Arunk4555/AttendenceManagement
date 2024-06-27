import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { AuthenticationService } from './authentication.service';
import { Attendence1Component } from './attendence1/attendence1.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { UserauthGarudService } from './userauth-garud.service';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { AttendanceInputComponent } from './attendance-input/attendance-input.component';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';
import { AttendanceExportComponent } from './attendance-export/attendance-export.component';
import { table } from 'console';
import { TableComponent } from './table/table.component';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';



const routes: Routes = [
  {
    path:'',component:FrontpageComponent
  },
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'servicepage',component:ServicepageComponent},
  {path:'aboutpage',component:AboutpageComponent},
  //  {path:'attendence1',component:Attendence1Component,canActivate:[AuthGaurdService]},
  {path:'attendence1',component:Attendence1Component,canActivate:[AuthGaurdService]},
  {path:'employee',component:EmployeeComponent,canActivate:[UserauthGarudService]},
  {path:'contactpage',component:ContactuspageComponent},
  {path:'addattendence',component:ImportComponent},
  {path:'attendencetable',component:TableComponent},
  {path:'exportattendance',component:ExportComponent}

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
