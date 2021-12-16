import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from "../../admin-page/service/admin.service";
import {RegistrationService} from "../service/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
  providers: [RegistrationService]
})
export class RegistrationPageComponent implements OnInit {

  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() middleName!: string;
  @Input() login!: string;
  @Input() password!: string;


  constructor(private registrationService: RegistrationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registration(firstName: string, middleName: string, lastName: string, login:string, password: string){
     this.registrationService.createUser(firstName, middleName, lastName, login, password)
    this.router.navigate(['login-page']);
  }


  goHome(){
    this.router.navigate(['home-page']);
  }
}
