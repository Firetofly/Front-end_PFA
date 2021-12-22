import {Component, Input, OnInit} from '@angular/core';
import {Deposit} from "../../interfaces/Deposit";
import {DepositService} from "../service/deposit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../admin-page/service/admin.service";
import {Global} from "../../interfaces/global";
import {User} from "../../interfaces/User";
import {ClientDeposit} from "../../interfaces/ClientDeposit";
;



@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.css']
})
export class CreateDepositComponent implements OnInit {

  //private globalUser: Global;
  //deposit: Deposit;
  @Input() depositName!:string;
  @Input() depositValue!:number;
  @Input() depositPercent!:number;
  @Input() depositCurrency!:string;
  clientLogin: string;


  user!:User;


  constructor(private depositService: DepositService,private router: Router,private globalUser:Global,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.login=this.route.snapshot.params['login'];
  }

  public addDeposit(depositName:string,depositValue:number,depositPercent:number,depositCurrency:string){

    this.clientLogin=this.globalUser.currentUser.login;
    console.log(this.clientLogin)
    console.log(this.depositName)
    console.log(this.depositValue)
    console.log(this.depositPercent)
    console.log(this.depositCurrency)

    this.depositService.saveDeposit(this.clientLogin,depositName,depositValue
                                    ,depositPercent,depositCurrency).subscribe(result=>{
      console.log('Result: '+result);
      this.router.navigate(['deposits'])},
      error => console.log(error))
  }





}
