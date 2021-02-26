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
        icon: 'pi pi-shopping-cart'
      },
      {
        label: 'Entrar',
        icon: 'pi pi-sign-in'
      }
    ]
  };
}
