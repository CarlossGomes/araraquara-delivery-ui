import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComercioComponent } from './cadastrar-comercio/cadastrar-comercio.component';

const routes: Routes = [
  {
    path:'',
    component: CadastrarComercioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercioRoutingModule { }
