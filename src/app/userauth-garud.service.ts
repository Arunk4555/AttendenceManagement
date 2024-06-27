import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserauthGarudService {
  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    if (this.authService.isUserLoggedIn() && this.authService.getUserRole() === 'user') {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
  
}
