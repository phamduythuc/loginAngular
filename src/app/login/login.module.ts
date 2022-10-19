import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginTmplComponent } from './login-tmpl/login-tmpl.component';
import { BoxLoginComponent } from './box-login/box-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginTmplComponent,
    BoxLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [LoginTmplComponent]
})
export class LoginModule { }
