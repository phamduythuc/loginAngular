import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {UserLoginService} from "../../service/user-login.service";
import { CheckLoginService } from 'src/app/service/check-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-box-login',
  templateUrl: './box-login.component.html',
  styleUrls: ['./box-login.component.scss'],

})
export class BoxLoginComponent implements OnInit {
  formLogin = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    pass: new FormControl('', [Validators.required,  Validators.minLength(5)]),
  })
  activeRouting: boolean = false;
  constructor(private user: UserLoginService , private router: Router, private check: CheckLoginService){}   

  ngOnInit(): void {
  }
  onSubmit () {
    const {name, pass} = this.formLogin.value
    if (this.formLogin.valid) {
      this.user.getUser(name, pass).subscribe((reponse: any) => {
        reponse.forEach((item: any) => {
          if(item.username === name && item.password === pass) {
            this.check.userLogin();
            this.router.navigate(['product'])
          }
        })
      })
    }
    
  }
  checkLogin() {
    if (this.check.activeUser) {
      this.activeRouting = false
    }else {
      this.activeRouting = true
    }
  }
  

}
