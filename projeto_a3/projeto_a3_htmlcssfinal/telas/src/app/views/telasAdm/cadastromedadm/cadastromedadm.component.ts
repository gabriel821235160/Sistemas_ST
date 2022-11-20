import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastromedadm',
  templateUrl: './cadastromedadm.component.html',
  styleUrls: ['./cadastromedadm.component.css']
})
export class CadastromedadmComponent implements OnInit {

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

  connectionCadastropac(){
    this.rota.navigate(['cadastropacadm'])
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
