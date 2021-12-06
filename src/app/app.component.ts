import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private router: Router) {
  }

  goAdmin(){
    this.router.navigate(['admin-page']);
  }
  goTransactions(){
    this.router.navigate(['transactions']);
  }
  goHome(){
    this.router.navigate(['']);
  }

  goRegistration(){
    this.router.navigate(['reg-page']);
  }

  goLogin(){
    this.router.navigate(['login-page']);
  }
}

