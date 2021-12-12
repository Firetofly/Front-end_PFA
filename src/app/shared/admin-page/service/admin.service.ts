import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../../interfaces/User";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8090/admin/';

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

  updateUser(login: string, firstName:string, middleName: string, lastName: string): Observable<Object>{
    return this.http.put('http://localhost:8090/admin/update-client',
      {login,firstName,middleName,lastName});
  }


  deleteUser(login: string):Observable<any>{
    return this.http.delete('http://localhost:8090/admin/delete-client',
      {params: new HttpParams().set('login',login)})
  }

}
