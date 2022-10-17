import { Injectable, } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }
  public getCard(page: any, limit: any, name: any) {
    return this.http.get('https://634914440b382d796c7d0e8c.mockapi.io/api/product', {
      params: {
        page: page,
        limit: limit,
        name: name,
      }
    })
  }
}
