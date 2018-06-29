import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  opened:any;

  constructor(){
    this.menuResponsivoWindow();
  }

  menuResponsivoResize(event) {
    if(event.target.innerWidth > 768){
      this.opened = true;
    }else{
      this.opened = false;
    }
  }

  menuResponsivoWindow(){
    if(window.screen.availWidth > 768){
      this.opened = true;
    }else{
      this.opened = false;
    }
  }
}
