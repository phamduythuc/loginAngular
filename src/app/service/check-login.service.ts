import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {
  constructor() { }
  
   activeUser = false;
   userLogin () {
     this.activeUser = true;
  }
   userLogout () {
     this.activeUser = false;
  }
  isLogin () {
    return this.activeUser;
  }

}
