import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LucroService {
  constructor(private http: Http) { }

  
  lista(): Promise<any> {
    return this.http.get('https://www.mocky.io/v2/5b2c010d300000100023487a')
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}
