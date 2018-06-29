import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';



@NgModule({
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports: [
    BrowserModule,
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialComponentModule { }