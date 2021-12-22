import {Component, Input, OnInit} from '@angular/core';
import {Deposit} from "../../interfaces/Deposit";
import {DepositService} from "../service/deposit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../admin-page/service/admin.service";
import {Global} from "../../interfaces/global";
import {User} from "../../interfaces/User";
import {ClientDeposit} from "../../interfaces/ClientDeposit";



@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.css']
})
export class CreateDepositComponent implements OnInit {

  //private globalUser: Global;
  //deposit: Deposit;
  @Input() name!:string;
  @Input() value!:number;
  @Input() percent!:number;
  @Input() currency!:string;
  login: string;


  user!:User;


  constructor(private depositService: DepositService,private router: Router,private globalUser:Global,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.login=this.route.snapshot.params['login'];
  }

  public addDeposit(name:string,value:number,percent:number,currency:string){
    this.login=this.globalUser.currentUser.login;
    this.depositService.saveDeposit(this.login,name,value,percent,currency).subscribe(result=>{
      console.log('Result: '+result);
      this.router.navigate(['deposits'])},
      error => console.log(error))
  }





}
