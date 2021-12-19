import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DepositService} from "../service/deposit.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Deposit} from "../../interfaces/Deposit";
import {Global} from "../../interfaces/global";
import {User} from "../../interfaces/User";
import {AdminService} from "../../admin-page/service/admin.service";

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {

  depositArray:Observable<Deposit[]>;
  private globalUser: Global;
  constructor(private depositService: DepositService,private router: Router,private adminService:AdminService) {

  }

  ngOnInit(): void {
    this.reloadData();
  }

  public reloadData() {
    //console.log(this.globalUser.currentUser.login);
    this.depositArray = this.depositService.findAllDeposits()
  }
}
