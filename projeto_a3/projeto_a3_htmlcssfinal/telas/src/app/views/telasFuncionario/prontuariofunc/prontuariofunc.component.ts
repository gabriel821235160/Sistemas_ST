import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prontuariofunc',
  templateUrl: './prontuariofunc.component.html',
  styleUrls: ['./prontuariofunc.component.css']
})
export class ProntuariofuncComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionInicio(){
    this.rota.navigate(['telainicialmed'])
  }

  connectionListagem(){
    this.rota.navigate(['listagemmed'])
  }

  connectionCadastropacfunc(){
    this.rota.navigate(['cadastropacfunc']);
  }


  ngOnInit(): void {
  }

}
