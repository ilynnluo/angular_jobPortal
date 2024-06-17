import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  login() {
    this.loggedIn = true;
  }
  
  isAuthenticated() {
    const promise = new Promise((resole, reject) => {
      setTimeout(() => {
        resole(this.loggedIn);
      }, 800);
    });
    return promise;
  }

constructor() { }

}
