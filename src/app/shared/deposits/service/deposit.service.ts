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
    return this.http.get<Deposit[]>('http://localhost:8090/deposit/all-client-deposits',
      {params:new HttpParams().set('login',this.globalUser.currentUser.login)})
  }

  public saveDeposit(clientLogin:string,depositName:string,depositValue:number,depositPercent:number,depositCurrency:string):Observable<Object>{
    return this.http.post("http://localhost:8090/deposit/create-deposit",{clientLogin,depositName,depositValue
      ,depositPercent,depositCurrency});
  }

/*  public saveDeposit(login:string,name:string,value:number,percent:number,currency:string):Observable<Object>{
    return this.http.post("http://localhost:8090/deposit/create-deposit",
      {params:new HttpParams().set('login',this.globalUser.currentUser.login).set('name',name)
            .set('value',value).set('percent',percent).set('currency',currency)});
  }*/

}
