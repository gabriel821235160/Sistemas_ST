import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent implements OnInit {

  nome: string | undefined;
  fone: string | undefined;
  email: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  onAdicionarCliente() {
    console.log('Adicionando cliente');
  }

}
