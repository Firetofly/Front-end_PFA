import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/User";
import {HttpClient} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import {AdminService} from "../service/admin.service";
import {AppComponent} from "../../../app.component";
import {isNull} from "@angular/compiler/src/output/output_ast";
import {error} from "@angular/compiler/src/util";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers: [AdminService]
})
export class AdminPageComponent implements OnInit {
  @Input() login!: string;
  @Input() id!: number;
  userArray!:Observable<User[]>;
  user!: User;

  constructor(private adminService: AdminService, private router: Router) {

  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.userArray=this.adminService.findAllUsers();
  }

  public getAllUsers(){
    this.adminService.findAllUsers()
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

  public deleteUser(login: string){
    this.adminService.deleteUser(login)
      .subscribe(data=>{console.log(data);
                             this.reloadData();},
                 error => console.log(error));
  }

  userDetails(login: string){
    this.router.navigate(['user-details',login])
  }
  updateUser(login: string){
    this.router.navigate(['update-user',login]);
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
