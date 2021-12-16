import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  public getLogin(login: string){
    this.http.get<User>('http://localhost:8090/login',{params: new HttpParams().set('login',login)})
  }
}
