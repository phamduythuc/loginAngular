import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerTmlpComponent } from './container/container-tmlp/container-tmlp.component';
import { LoginTmplComponent } from './login/login-tmpl/login-tmpl.component';
import {AuthGuard} from "./auth.guard"

const routes: Routes = [
  {path: 'product' , component :  ContainerTmlpComponent,canActivate: [AuthGuard]},
  {path: 'login' , component: LoginTmplComponent},
  {path: '' , redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
