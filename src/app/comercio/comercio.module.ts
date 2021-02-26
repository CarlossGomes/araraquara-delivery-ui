import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComercioRoutingModule } from './comercio-routing.module';
import { CadastrarComercioComponent } from './cadastrar-comercio/cadastrar-comercio.component';
import {CardModule} from 'primeng-lts/card';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng-lts/inputtext';
import { FieldValidationModule } from '../shared/components/field-validation/field-validation.module';
import {InputMaskModule} from 'primeng-lts/inputmask';
import {DropdownModule} from 'primeng-lts/dropdown';


@NgModule({
  declarations: [CadastrarComercioComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ComercioRoutingModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    FieldValidationModule,
    InputMaskModule,
    DropdownModule

  ],
  providers: [ComercioModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComercioModule { }
