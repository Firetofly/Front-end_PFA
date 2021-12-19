import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../interfaces/User";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Deposit} from "../../interfaces/Deposit";
import {Global} from "../../interfaces/global";

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  user:User

  constructor(private http:HttpClient,private globalUser:Global) {
    this.user=globalUser.currentUser;
  }

  public findAllDeposits():Observable<Deposit[]>{
    console.log(this.globalUser.currentUser.login);
    return this.http.get<Deposit[]>('http://localhost:8090/deposit/all-client-deposits',
      {params:new HttpParams().set('login',this.globalUser.currentUser.login)})


  }

}
