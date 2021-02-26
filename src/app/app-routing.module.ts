
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComercioModule } from './comercio/comercio.module';

const routes: Routes = [
  {
    path: 'comercio',
    loadChildren: () => ComercioModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
