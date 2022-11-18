import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';
import { InicialComponent } from './views/inicial/inicial.component';
import { ProntuarioComponent } from './views/prontuario/prontuario.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { CadastrofuncComponent } from './views/cadastrofunc/cadastrofunc.component';
import { CadastromedComponent } from './views/cadastromed/cadastromed.component';
import { CadastropacComponent } from './views/cadastropac/cadastropac.component';
import { TeladeinicioComponent } from './views/teladeinicio/teladeinicio.component';

const routes: Routes = [

  {path: 'inicial', component: InicialComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'listagem', component:ListagemComponent},
  {path: 'prontuario', component: ProntuarioComponent},
  {path: 'cadastrofunc', component:CadastrofuncComponent},
  {path: 'cadastromed', component:CadastromedComponent},
  {path: 'cadastropac', component:CadastropacComponent},
  {path: '', component:TeladeinicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
