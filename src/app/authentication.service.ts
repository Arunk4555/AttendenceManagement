import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationService: any;

  constructor() { }
  authenticate(username: string, password: string) {
    if (username === "Arun" && password === "ARUN@15" || username === "sai" && password === "SAI@15") {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('role', 'admin');
      return true;
    } else if (username === "ArunKumar" && password === "ARUN@2088") {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('role', 'user');
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  getUserRole(): string | null {
    return sessionStorage.getItem('role');
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
  }


}
