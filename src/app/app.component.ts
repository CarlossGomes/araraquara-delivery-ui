import { MenuItem } from 'primeng-lts/api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Comercios',
        icon: 'pi pi-shopping-cart',
        routerLink: 'comercio'
      },
      {
        label: 'Cadastrar',
        icon: 'pi pi-sign-in'
      }
    ]
  };
}
