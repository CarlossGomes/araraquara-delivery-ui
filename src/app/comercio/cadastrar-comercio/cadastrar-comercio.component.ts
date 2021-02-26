import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servico } from '../model/Servico';

@Component({
  selector: 'app-cadastrar-comercio',
  templateUrl: './cadastrar-comercio.component.html',
  styleUrls: ['./cadastrar-comercio.component.css']
})
export class CadastrarComercioComponent implements OnInit {

  public formulario: FormGroup;
  services: Servico[];
  constructor(private formBuilder: FormBuilder) {

    this.services = [
      {id: 1, descricao: 'Mercado'},
      {id: 2, descricao: 'Mercearia'},
      {id: 3, descricao: 'Farmacia'},
  ];
  }

  ngOnInit(): void {
    this.createForm()
  }


  public createForm(): void {
    this.formulario = this.formBuilder.group(
      {
        nome: [null, Validators.required],
        telefone: [null, Validators.required],
        celular: [null, Validators.required],
        servico: [null, Validators.required]
      }
    );
  }

}
