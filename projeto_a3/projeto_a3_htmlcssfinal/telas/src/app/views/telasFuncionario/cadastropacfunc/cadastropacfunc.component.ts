import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastropacfunc',
  templateUrl: './cadastropacfunc.component.html',
  styleUrls: ['./cadastropacfunc.component.css']
})
export class CadastropacfuncComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionInicio(){
    this.rota.navigate(['telainicialfunc'])
  }

  connectionListagem(){
    this.rota.navigate(['listagemfunc'])
  }


  ngOnInit(): void {
  }

}
