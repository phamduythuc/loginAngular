import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {
  constructor() { }
  
  public activeUser = false;
  public userLogin () {
     this.activeUser = true;
  }
  public userLogout () {
     this.activeUser = false;
  }

}
