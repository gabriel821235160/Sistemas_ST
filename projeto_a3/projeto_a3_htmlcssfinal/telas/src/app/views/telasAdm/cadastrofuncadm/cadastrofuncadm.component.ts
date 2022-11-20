import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrofuncadm',
  templateUrl: './cadastrofuncadm.component.html',
  styleUrls: ['./cadastrofuncadm.component.css']
})
export class CadastrofuncadmComponent implements OnInit {

  nome=''
  cpf=''
  dt_nascimento=''
  senha=''
  acesso='1'
  tipo_acesso='Funcionário'

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionCadastrofunc(){
    return this.HttpClient.post<{erro:false, mensagem:''}>('http://localhost:8000/cadastro-funcionario', 
    {nome: this.nome, cpf: this.cpf, dt_nascimento: this.dt_nascimento, senha: this.senha, acesso:this.acesso,tipo_acesso: this.tipo_acesso})
    .subscribe(
      (res) => {
        if(res.erro){
          console.log(res.mensagem)
        }
        else{
          console.log('Cadastrado com sucesso!')
        }
      }
    )
  }

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
