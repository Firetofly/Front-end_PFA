import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Global} from "./shared/interfaces/global";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Global]
})
export class AppComponent implements OnInit{

  constructor(private router: Router, public global:Global) {
  }

  ngOnInit() {
  }

  /*  goAdmin(){
      this.router.navigate(['admin-page']);
    }*/
  goTransactions(){
    this.router.navigate(['transactions']);
  }
  goHome(){
    this.router.navigate(['']);
  }

/*  goRegistration(){
    this.router.navigate(['reg-page']);
  }

  goLogin(){
    this.router.navigate(['login-page']);
  }
  */

  removeUser(){
    console.log('Removed user');
    localStorage.removeItem('currentUser');
    this.global.currentUser=null;
    console.log(this.global.currentUser);
    console.log(localStorage.getItem('currentUser'));
    this.goHome();
  }

  isLoginAdmin(){
    return this.global.currentUser.login=='fomin-sa';
  }

  isLoginUser(){
    return localStorage.getItem('currentUser') !=null && this.global.currentUser.login !='fomin-sa';
  }



}

