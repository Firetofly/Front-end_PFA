import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/interfaces";
import {LoginService} from "../service/login.service";
import {HttpClient, HttpParams} from "@angular/common/http";

import {Global} from "../../interfaces/global";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [Global, LoginService]
})
export class LoginPageComponent implements OnInit {

  @Input() login!: string;
  @Input() password!: string;
  @Input() public user!: User;


  constructor(private http: HttpClient,
              private global: Global,
              private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getLogin(this.login);
  }

  loginUser(login: string, password: string){
    this.http.post<User>('http://localhost:8090/user/login',{login,password}).subscribe(result=>{
      console.log(result);
      if(result){
        this.user=result;
        console.log(this.user.id);
        if(this.user.id ==1){
          document.location.href='admin-page';
        }
        else{
        this.global.currentUser=this.user;
        localStorage.setItem('currentUser',JSON.stringify(this.user));
        document.location.href='';
        }
      }
    })
  }





}