import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listagemfunc',
  templateUrl: './listagemfunc.component.html',
  styleUrls: ['./listagemfunc.component.css']
})
export class ListagemfuncComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionInicio(){
    this.rota.navigate(['telainicialfunc'])
  }

  connectionAbrirprontuario(){
    this.rota.navigate(['prontuariofunc'])
  }

  connectionCadastropac(){
    this.rota.navigate(['cadastropacfunc'])
  }

  ngOnInit(): void {
  }

}
