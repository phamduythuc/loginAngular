import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerTmlpComponent } from './container/container-tmlp/container-tmlp.component';
const routes: Routes = [
  {path: 'product' , component :  ContainerTmlpComponent},
  {path: '' , redirectTo: 'product', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
