import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class RegistrationService{

  constructor(private http: HttpClient) { }

  createUser(firstName: string, middleName: string, lastName: string, login:string, password: string){
     this.http.post<Response>('http://localhost:8090/registration',
       {firstName,middleName,lastName,login,password}).subscribe(result=>{
      console.log(result);
    })
  }
}
