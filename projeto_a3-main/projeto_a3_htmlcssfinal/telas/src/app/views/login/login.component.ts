import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private HttpClient: HttpClient) { }

  connectionLogin(){
    return this.HttpClient.get<Usuario>('http://localhost:7000/login')
    .pipe(
      (res) => res,
      (err) => err
    );
  }
}
