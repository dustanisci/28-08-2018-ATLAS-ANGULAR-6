import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { MaterialComponentModule } from './material.component.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoComponent } from './logo/logo.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { TopoComponent } from './topo/topo.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { LucroComponent } from './lucro/lucro.component';
import { LucroService } from './lucro.service';
import {MatPaginatorIntl } from '@angular/material';
import { getDutchPaginatorIntl } from './table/traducao-paginator';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LogoComponent,
    SidenavItemComponent,
    TopoComponent,
    FooterComponent,
    TableComponent,
    LucroComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MaterialComponentModule,
    HttpModule,    
  ],
  providers: [LucroService, { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule {
  showFiller = false;

 }
