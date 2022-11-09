import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'terceiroprojeto';
  textoBotao = "Esconder ----";
  abacaxi = false;

  pessoas = [
    { nome: "José", idade: 18, endereco: "rua sem nome" },
    { nome: "Maria", idade: 22, endereco: "rua sem nome" }
  ];

  alterarExibicao() {
    /*
    if(this.abacaxi){
      this.textoBotao = "esconder" ;
      this.abacaxi = false;
    } else {
      this.textoBotao = "exibir";
      this.abacaxi = true;
    }
    */
    this.textoBotao = this.abacaxi ? "Esconder" : "Exibir";
    this.abacaxi = !this.abacaxi;
  }

  adicionar(nome: any, idade: any, endereco: any) {
    this.pessoas = [{ nome: nome, idade: idade, endereco: endereco }, ...this.pessoas];
    }
}
