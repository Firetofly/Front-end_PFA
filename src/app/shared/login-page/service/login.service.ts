import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  /*login(login: string, password: string){
    this.http.post('http://localhost:8090/user/login',{login,password})
  }*/

  public getLogin(login: string){
    this.http.get<User>('http://localhost:8090/user/login',{params: new HttpParams().set('login',login)})
  }
}
