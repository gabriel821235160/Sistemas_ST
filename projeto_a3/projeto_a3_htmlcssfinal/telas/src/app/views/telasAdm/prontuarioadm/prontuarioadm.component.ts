import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prontuarioadm',
  templateUrl: './prontuarioadm.component.html',
  styleUrls: ['./prontuarioadm.component.css']
})
export class ProntuarioadmComponent implements OnInit {

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

  connectionCadastropac(){
    this.rota.navigate(['cadastropacadm'])
  }

  connectionAlteracaofunc(){
    this.rota.navigate(['alteracaomedadm'])
  }

  connectionAlteracaomed(){
    this.rota.navigate(['alteracaomedadm'])
  }


  ngOnInit(): void {
  }

}
