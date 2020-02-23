import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public opened: boolean;

  constructor() {
    this.menuResponsivoWindow();
  }

  menuResponsivoResize(event) {
    if (event.target.innerWidth > 768) {
      this.opened = true;
    } else {
      this.opened = false;
    }
  }

  menuResponsivoWindow() {
    if (window.screen.availWidth > 768) {
      this.opened = true;
    } else {
      this.opened = false;
    }
  }

}
