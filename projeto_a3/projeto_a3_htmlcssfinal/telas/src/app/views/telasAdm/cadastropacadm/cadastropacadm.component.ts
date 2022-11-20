import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastropacadm',
  templateUrl: './cadastropacadm.component.html',
  styleUrls: ['./cadastropacadm.component.css']
})
export class CadastropacadmComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionInicio(){
    this.rota.navigate(['telainicialadm'])
  }

  connectionListagem(){
    this.rota.navigate(['listagemadm'])
  }

  connectionCadastrofunc(){
    this.rota.navigate(['cadastrofuncadm'])
  }

  connectionCadastromed(){
    this.rota.navigate(['cadastromedadm'])
  }

  connectionAlteracaofunc(){
    this.rota.navigate(['alteracaofuncadm'])
  }

  connectionAlteracaomed(){
    this.rota.navigate(['alteracaomedadm'])
  }




  ngOnInit(): void {
  }

}
