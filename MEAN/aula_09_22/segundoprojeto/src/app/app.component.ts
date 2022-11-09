import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundoprojeto';
  nome = 'jose';
  idade = 59;

  esconderCaixa = true;

  numero: number | undefined;
  
  escolher() {
    this.numero = Math.floor(Math.random() * 100) + 1;
  }

  alterarNome(nome: any) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  adicionar(nomeInput: any) {
    console.log(nomeInput.value);
    this.nome = nomeInput.value;
    this.esconderCaixa = nomeInput.value.length <= 0;

  }
}
