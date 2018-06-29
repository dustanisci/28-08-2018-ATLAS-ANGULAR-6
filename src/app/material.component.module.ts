import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    MatChipsModule
    
  ],
  exports: [
    BrowserModule,
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    MatChipsModule
  ]
})
export class MaterialComponentModule { }