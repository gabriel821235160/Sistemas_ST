import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrofuncadm',
  templateUrl: './cadastrofuncadm.component.html',
  styleUrls: ['./cadastrofuncadm.component.css']
})
export class CadastrofuncadmComponent implements OnInit {

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

  connectionCadastromed(){
    this.rota.navigate(['cadastromedadm'])
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
