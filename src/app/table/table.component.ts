import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { LucroComponent } from '../lucro/lucro.component';
import { LucroService } from '../lucro.service';
import {MatPaginatorIntl } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['data', 'moeda', 'rendimentos', 'porcentagem'];
  dataSource = new MatTableDataSource<LucroComponent>();
  lucros:LucroComponent[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public ngOnInit() {
    this.lista();
  }

  constructor(private lucroService: LucroService) { }

  private lista(){
    this.lucroService.lista()
      .then(lucros => {
        this.lucros = lucros;
        this.dataSource = new MatTableDataSource<LucroComponent>(this.lucros);
        this.dataSource.paginator = this.paginator;
        this.dataSource._orderData;
        console.log(this.lucros);
      });
  }

  private applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
