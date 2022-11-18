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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatMenu, MatMenuModule} from '@angular/material/menu';

import { CadastroComponent } from './views/cadastro/cadastro.component';
import { InicialComponent } from './views/inicial/inicial.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { ProntuarioComponent } from './views/prontuario/prontuario.component';
import { CadastrofuncComponent } from './views/cadastrofunc/cadastrofunc.component';
import { CadastromedComponent } from './views/cadastromed/cadastromed.component';
import { CadastropacComponent } from './views/cadastropac/cadastropac.component';
import { TeladeinicioComponent } from './views/teladeinicio/teladeinicio.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopoComponent,
    CadastroComponent,
    InicialComponent,
    ListagemComponent,
    ProntuarioComponent,
    CadastrofuncComponent,
    CadastromedComponent,
    CadastropacComponent,
    TeladeinicioComponent,
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
    MatMenuModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
