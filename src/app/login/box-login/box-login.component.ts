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
    pass: new FormControl('', [Validators.required,  Validators.minLength(6)]),
  })
  activeRouting = false;
  constructor(private user: UserLoginService , private router: Router, private check: CheckLoginService){}   

  ngOnInit(): void {
    console.log(this.formLogin);
  }
  onSubmit () {
    console.log(this.formLogin);

    const {name, pass} = this.formLogin.value
   
  
      this.user.getUser(name, pass).subscribe((reponse: any) => {
        reponse.forEach((item: any) => {
          if(item.username === name && item.password === pass) {
            this.check.userLogin();
            console.log(this.check.activeUser)
            console.log(item)
            // this.router.navigate(['product'])
          }
        })
      })
    }
  

}
