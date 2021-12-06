import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from "../../admin-page/service/admin.service";
import {RegistrationService} from "../service/registration.service";

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


  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit(): void {
  }

  registration(firstName: string, middleName: string, lastName: string, login:string, password: string){
     this.registrationService.createUser(firstName, middleName, lastName, login, password)
  }








}
