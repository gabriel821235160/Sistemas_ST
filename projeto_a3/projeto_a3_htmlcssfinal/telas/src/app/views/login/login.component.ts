import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Login } from 'src/app/model/login/login';
import { LoginService } from 'src/app/services/loginService/loginService.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login$!: Observable<Login[]>;

  constructor(private serviceLogin: LoginService ) {
    this.serviceLogin.listaDeMedicos().pipe(
      catchError((err) =>{
        console.log(err);
        return of([]);
      })
    )
   }
  

  ngOnInit(): void {

  }
  
  //lista(){
  //  const jose = this.medicos$.subscribe(
  //    (res) => console.log(res)
  //  )
  //  console.log(jose);
  //}



}
