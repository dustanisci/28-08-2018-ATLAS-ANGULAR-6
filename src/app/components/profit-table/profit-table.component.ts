import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Profit } from 'src/app/model/profit';
import { ProfitTableService } from './profit-table.service';

@Component({
  selector: 'app-profit-table',
  templateUrl: './profit-table.component.html',
  styleUrls: ['./profit-table.component.scss'],
})
export class ProfitTableComponent implements OnInit {
  public displayedColumns: string[] = [
    'data',
    'moeda',
    'rendimentos',
    'porcentagem',
  ];
  public dataSource = new MatTableDataSource<Profit>();
  public profits: Profit[] = new Array<Profit>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public ngOnInit() {
    this.getProfits();
  }

  constructor(private profitsService: ProfitTableService) {}

  private getProfits() {
    this.profitsService
      .dataProfits()
      .pipe(take(1))
      .subscribe({
        next: (resp: Profit[]) => {
          this.profits = resp;
          this.dataSource = new MatTableDataSource<Profit>(this.profits);
          this.dataSource.paginator = this.paginator;
        },
        error: () => alert('Não foi possível carregar, tente novamente!'),
      });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
