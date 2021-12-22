import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DepositService} from "../service/deposit.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Deposit} from "../../interfaces/Deposit";
import {Global} from "../../interfaces/global";
import {User} from "../../interfaces/User";
import {AdminService} from "../../admin-page/service/admin.service";
import {global} from "@angular/compiler/src/util";

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {

  depositArray:Observable<Deposit[]>;

  deposit:Deposit;
  constructor(private depositService: DepositService,private router: Router,
              private adminService:AdminService,private globalUser: Global) {

  }

  ngOnInit(): void {
    this.reloadData();
  }

  public reloadData() {
    this.depositArray = this.depositService.findAllDeposits()
  }

  createDeposit(){
    this.router.navigate(['create-deposit'])
  }
}
