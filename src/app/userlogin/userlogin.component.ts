import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  username=''
  password=''

  invalidLogin=false
  constructor(private router:Router,public loginservice:AuthenticationService){}

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
  alert("your login is sucessful click on ok to continue")
      this.router.navigate(['employee'])
  
      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("Wrong Credentials");
      this.router.navigate(['home'])
    }
  
  }

}
