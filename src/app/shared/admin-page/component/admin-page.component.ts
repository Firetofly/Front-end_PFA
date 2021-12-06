import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/interfaces";
import {HttpClient} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import {AdminService} from "../service/admin.service";
import {AppComponent} from "../../../app.component";
import {isNull} from "@angular/compiler/src/output/output_ast";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers: [AdminService]
})
export class AdminPageComponent implements OnInit {
  @Input() login!: string;
  @Input() id!: number;
  userArray:User[]=[];
  user!: User;

  constructor(private adminService: AdminService) {

  }




  ngOnInit(): void {

  }

  public getAllUsers(){
    this.adminService.findAllUsers().subscribe(result=>{
      for(let user of result){
        //user = new User(user.id,user.firstName,user.middleName,user.lastName,user.login);
        console.log(user);
        this.userArray.push(user);
      }
    })
  }

  public getUserByLogin(login: string){
    this.adminService.findUserByLogin(login).subscribe((data:User)=>{
      this.user=data;
    })
  }

  public getUserById(id: number){
    this.adminService.findUserById(id).subscribe((data:User)=>{
      this.user=data;
    })
  }







  //this.adminService.findAllUsers().subscribe((data:any)=>{this.users=data["userList"]});

/*  *public findAllUsers(){
    return this.http.get('http://localhost:8090/Client/find-all-clients')
      .subscribe((data:any)=> this.user=new User(data.id,data.firstName,data.middleName,data.lastName,data.login))
  }*

  public findUserByLogin(login: string) {
    return this.http.get('http://localhost:8090/Client/find-client-by-login',{
      params: new HttpParams().set('login',login)
    })
  }

  public findUserById(id: number){
    return this.http.get('http://localhost:8090/Client/find-client-by-id',{
      params: new  HttpParams().set('id',id)
    })
  }*/


/*
  constructor() {
    this.login='';
  }

  output(login: string){
    console.log(login);
  }*/

}
