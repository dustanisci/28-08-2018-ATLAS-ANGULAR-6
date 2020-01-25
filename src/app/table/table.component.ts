import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { LucroService } from '../lucro.service';
import { Lucro } from './lucro';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['data', 'moeda', 'rendimentos', 'porcentagem'];
  dataSource = new MatTableDataSource<Lucro>();
  lucros:Lucro[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public ngOnInit() {
    this.lista();
  }

  constructor(private lucroService: LucroService) { }

  private lista(){
    this.lucroService.lista()
      .then(lucros => {
        this.lucros = lucros;
        this.dataSource = new MatTableDataSource<Lucro>(this.lucros);
        this.dataSource.paginator = this.paginator;
        this.dataSource._orderData;
      });
  }

  private applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
