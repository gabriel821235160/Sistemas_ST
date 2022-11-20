import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prontuariomed',
  templateUrl: './prontuariomed.component.html',
  styleUrls: ['./prontuariomed.component.css']
})
export class ProntuariomedComponent implements OnInit {

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





  ngOnInit(): void {
  }

}
