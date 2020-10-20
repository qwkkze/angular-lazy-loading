import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lazy-loading';
  constructor(public authService: AuthService) {}
  public onAuth() {
    this.authService.isLogged ? this.authService.logout() : this.authService.login();
  }
}
