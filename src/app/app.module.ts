import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { MaterialModule } from './material.module';
import { MaterialComponentModule } from './material.component.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoComponent } from './logo/logo.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { TopoComponent } from './topo/topo.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LogoComponent,
    SidenavItemComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    routing,  
    MaterialModule,
    MaterialComponentModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  showFiller = false;

 }
