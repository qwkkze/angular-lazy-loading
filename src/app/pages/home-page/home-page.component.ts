import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router: Router) {}

  public navigateToFirst() {
    this.router.navigate(['/first']);
  }

  public navigateToSecond() {
    this.router.navigate(['/second']);
  }

  public navigateToThird() {
    this.router.navigate(['/third']);
  }
}
