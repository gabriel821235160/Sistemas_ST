import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/login/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  listaDeMedicos(){
    return this.httpClient.get<Login>('http://localhost:7000/logar')
    .pipe(
      (res) => res,
      (err) => err
    );
  }
}