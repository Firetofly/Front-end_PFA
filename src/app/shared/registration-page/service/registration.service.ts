import { Injectable } from '@angular/core';
import {User} from "../../interfaces/User";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RegistrationService{

  constructor(private http: HttpClient) { }

  createUser(firstName: string, middleName: string, lastName: string, login:string, password: string){
     this.http.post<Response>('http://localhost:8090/user/registration',{firstName, middleName, lastName, login, password}).subscribe(result=>{
      console.log(result);
    })
  }
}
