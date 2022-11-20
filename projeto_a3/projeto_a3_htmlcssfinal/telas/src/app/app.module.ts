import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './views/topo/topo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { InicialComponent } from './views/inicial/inicial.component';

import { ListagemadmComponent } from './views/telasAdm/listagemadm/listagemadm.component';
import { ProntuarioadmComponent } from './views/telasAdm/prontuarioadm/prontuarioadm.component';
import { CadastrofuncadmComponent } from './views/telasAdm/cadastrofuncadm/cadastrofuncadm.component';
import { CadastromedadmComponent } from './views/telasAdm/cadastromedadm/cadastromedadm.component';
import { CadastropacadmComponent } from './views/telasAdm/cadastropacadm/cadastropacadm.component';
import { AlteracaofuncadmComponent } from './views/telasAdm/alteracaofuncadm/alteracaofuncadm.component';
import { AlteracaomedadmComponent } from './views/telasAdm/alteracaomedadm/alteracaomedadm.component';
import { ListagemfuncComponent } from './views/telasFuncionario/listagemfunc/listagemfunc.component';
import { CadastropacfuncComponent } from './views/telasFuncionario/cadastropacfunc/cadastropacfunc.component';
import { ProntuariomedComponent } from './views/telasMedico/prontuariomed/prontuariomed.component';
import { TelainicialmedComponent } from './views/telasMedico/telainicialmed/telainicialmed.component';
import { TelainicialfuncComponent } from './views/telasFuncionario/telainicialfunc/telainicialfunc.component';
import { TelainicialadmComponent } from './views/telasAdm/telainicialadm/telainicialadm.component';
import { ListagemmedComponent } from './views/telasMedico/listagemmed/listagemmed.component';
import { ProntuariofuncComponent } from './views/telasFuncionario/prontuariofunc/prontuariofunc.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopoComponent,
    InicialComponent,
    ListagemadmComponent,
    ProntuarioadmComponent,
    CadastrofuncadmComponent,
    CadastromedadmComponent,
    CadastropacadmComponent,
    AlteracaofuncadmComponent,
    AlteracaomedadmComponent,
    ListagemfuncComponent,
    CadastropacfuncComponent,
    ProntuariomedComponent,
    TelainicialmedComponent,
    TelainicialfuncComponent,
    TelainicialadmComponent,
    ListagemmedComponent,
    ProntuariofuncComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
