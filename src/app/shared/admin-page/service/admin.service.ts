import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../../interfaces/interfaces";
import {Observable} from "rxjs";


@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {

  }

  public findAllUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8090/admin/find-all-clients')
  }

  public findUserByLogin(login: string):Observable<User> {
    return this.http.get<User>('http://localhost:8090/admin/find-client-by-login',{
      params: new HttpParams().set('login',login)
    })
  }

  public findUserById(id: number): Observable<User>{
    return this.http.get<User>('http://localhost:8090/admin/find-by-id',{
      params: new  HttpParams().set('idClient',id)
    })
  }

}
