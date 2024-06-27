import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  username='user'
  password=''
  invalidLogin=false
  constructor(private router:Router,public loginservice:AuthenticationService){}

  checkadminLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
  alert("Your Login is sucessful click on ok to continue")
      this.router.navigate(['attendence1'])
  
      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("Wrong Credentials");
      this.router.navigate(['home'])
    }
  
  }



  const  = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560"
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1"
    },
    {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F"
    },
    {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36"
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430"
    }
];



}
