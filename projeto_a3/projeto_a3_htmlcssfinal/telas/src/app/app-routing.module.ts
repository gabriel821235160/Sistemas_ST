import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InicialComponent } from './views/inicial/inicial.component';
import { ProntuarioComponent } from './views/prontuario/prontuario.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { CadastrofuncComponent } from './views/cadastrofunc/cadastrofunc.component';
import { CadastromedComponent } from './views/cadastromed/cadastromed.component';
import { CadastropacComponent } from './views/cadastropac/cadastropac.component';
import { AlteracaofuncComponent } from './views/alteracaofunc/alteracaofunc.component';
import { AlteracaomedComponent } from './views/alteracaomed/alteracaomed.component';
import { InicialadmComponent } from './views/inicialadm/inicialadm.component';
import { InicialfuncComponent } from './views/inicialfunc/inicialfunc.component';
import { InicialmedComponent } from './views/inicialmed/inicialmed.component';

const routes: Routes = [

  {path: 'inicial', component: InicialComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listagem', component:ListagemComponent},
  {path: 'prontuario', component: ProntuarioComponent},
  {path: 'cadastrofunc', component:CadastrofuncComponent},
  {path: 'cadastromed', component:CadastromedComponent},
  {path: 'cadastropac', component:CadastropacComponent},
  {path: 'alteracaofunc', component:AlteracaofuncComponent},
  {path: 'alteracaomedico', component:AlteracaomedComponent},
  {path: 'incialadm', component:InicialadmComponent},
  {path: 'inicialfunc', component:InicialfuncComponent},
  {path: 'inicialmed', component:InicialmedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
