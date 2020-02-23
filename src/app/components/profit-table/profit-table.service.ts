import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Observable } from 'rxjs';
import { endpoints } from 'src/environments/environment';
import { Profit } from 'src/app/model/profit';

@Injectable({
  providedIn: 'root'
})
export class ProfitTableService {

  constructor(private apiService: ApiService) { }

  public dataProfits(): Observable<Profit[]> {
    return this.apiService.get(endpoints.profits);
  }

}
