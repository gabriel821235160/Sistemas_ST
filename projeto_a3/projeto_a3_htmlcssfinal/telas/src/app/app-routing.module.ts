import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InicialComponent } from './views/inicial/inicial.component';

import { TelainicialadmComponent } from './views/telasAdm/telainicialadm/telainicialadm.component';
import { ListagemadmComponent } from './views/telasAdm/listagemadm/listagemadm.component';
import { ProntuarioadmComponent } from './views/telasAdm/prontuarioadm/prontuarioadm.component';
import { CadastrofuncadmComponent } from './views/telasAdm/cadastrofuncadm/cadastrofuncadm.component';
import { CadastromedadmComponent } from './views/telasAdm/cadastromedadm/cadastromedadm.component';
import { CadastropacadmComponent } from './views/telasAdm/cadastropacadm/cadastropacadm.component';
import { AlteracaofuncadmComponent } from './views/telasAdm/alteracaofuncadm/alteracaofuncadm.component';
import { AlteracaomedadmComponent } from './views/telasAdm/alteracaomedadm/alteracaomedadm.component';


import { TelainicialfuncComponent } from './views/telasFuncionario/telainicialfunc/telainicialfunc.component';
import { ListagemfuncComponent } from './views/telasFuncionario/listagemfunc/listagemfunc.component';
import { CadastropacfuncComponent } from './views/telasFuncionario/cadastropacfunc/cadastropacfunc.component';


import { TelainicialmedComponent } from './views/telasMedico/telainicialmed/telainicialmed.component';
import { ListagemmedComponent } from './views/telasMedico/listagemmed/listagemmed.component';
import { ProntuariomedComponent } from './views/telasMedico/prontuariomed/prontuariomed.component';



const routes: Routes = [

  {path: 'incial', component: InicialComponent},
  {path: 'login', component: LoginComponent},

  {path: 'telainicialadm', component:TelainicialadmComponent},
  {path: 'listagemadm', component:ListagemadmComponent},
  {path: 'prontuarioadm', component:ProntuarioadmComponent},
  {path: 'cadastrofuncadm', component:CadastrofuncadmComponent},
  {path: 'cadastromedadm', component:CadastromedadmComponent},
  {path: 'cadastropacadm', component:CadastropacadmComponent},
  {path: 'alteracaofuncadm', component:AlteracaofuncadmComponent},
  {path: 'alteracaomedadm', component:AlteracaomedadmComponent},


  {path: 'telainicialfunc', component:TelainicialfuncComponent},
  {path: 'listagemfunc', component:ListagemfuncComponent},
  {path: 'cadastropacfunc', component:CadastropacfuncComponent},

  {path: 'telainicialmed', component:TelainicialmedComponent},
  {path: 'listagemmed', component:ListagemmedComponent},
  {path: 'prontuariomed', component:ProntuariomedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
