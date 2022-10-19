import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {


  constructor(private http: HttpClient) { }
  public getUser(username: any, password: any ) {
    return this.http.get('https://634914440b382d796c7d0e8c.mockapi.io/api/users', {
      params: {
        username: username,
        password: password,
        
      }})
    }
  
}
