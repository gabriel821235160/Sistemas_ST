import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telainicialmed',
  templateUrl: './telainicialmed.component.html',
  styleUrls: ['./telainicialmed.component.css']
})
export class TelainicialmedComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionProntuariomed(){
    this.rota.navigate(['prontuariomed']);
  }

  connectionLogout(){
    return this.HttpClient.get<{error:false, mensagem:''}>('http://localhost:8000/logout',)
    .subscribe(
      (res) => {
          this.rota.navigate(['login']);
      }
    )
  }

  ngOnInit(): void {
  }

}
