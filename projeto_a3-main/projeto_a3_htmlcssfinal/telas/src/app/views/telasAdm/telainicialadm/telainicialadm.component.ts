import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telainicialadm',
  templateUrl: './telainicialadm.component.html',
  styleUrls: ['./telainicialadm.component.css']
})
export class TelainicialadmComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionLogout(){
    return this.HttpClient.get<{error:false, mensagem:''}>('http://localhost:8000/logout',)
    .subscribe(
      (res) => {
          this.rota.navigate(['login']);
      }
    )
  }

  connectionListagem(){
    this.rota.navigate(['listagemadm']);
  }

  connectionProntuario(){
    this.rota.navigate(['prontuarioadm']);
  }
 
  connectionCadastrofunc(){
    this.rota.navigate(['cadastrofuncadm']);
  }

  connectionCadastromed(){
    this.rota.navigate(['cadastromedadm']);
  }

  connectionCadastropac(){
    this.rota.navigate(['cadastropacadm']);
  }

  ngOnInit(): void {
  }

}
