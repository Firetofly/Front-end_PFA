import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/User";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../service/admin.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  login!: string;
  user!: User;



  constructor(private route:ActivatedRoute, private router: Router,
              private adminService: AdminService) { }

  ngOnInit() {
    this.user=new User();

    this.login=this.route.snapshot.params['login'];
    this.adminService.findUserByLogin(this.login)
      .subscribe(data=>{console.log(data);
                             this.user=data;},
                 error => console.log(error));
  }

  updateUser(){
    this.adminService.updateUser(this.login,this.user.firstName,this.user.middleName,this.user.lastName)
      .subscribe(data=>{console.log(data);
      this.user=new User();
      this.gotoList();},
        error => console.log(error))
  }

  onSubmit(){
    this.updateUser();
  }

  gotoList(){
    this.router.navigate(['admin-page']);
  }

}
