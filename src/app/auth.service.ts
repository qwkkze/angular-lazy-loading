import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public get isLogged(): boolean {
    return !!localStorage.getItem('logged');
  }

  public login() {
    localStorage.setItem('logged', ';]');
  }

  public logout() {
    localStorage.removeItem('logged');
  }
}
