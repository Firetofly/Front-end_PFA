import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './shared/admin-page/component/admin-page.component';
import { FormsModule } from "@angular/forms";
import { TransactionsComponent } from './shared/transactions/component/transactions.component';
import { LoginPageComponent } from './shared/login-page/component/login-page.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { RegistrationPageComponent } from './shared/registration-page/component/registration-page.component';
import { UpdateUserComponent } from './shared/admin-page/update-user/update-user.component';
import { UserDetailsComponent } from './shared/admin-page/user-details/user-details.component';
import {AdminService} from "./shared/admin-page/service/admin.service";
import {DepositsComponent} from "./shared/deposits/component/deposits.component";
import {DepositService} from "./shared/deposits/service/deposit.service";
import {Global} from "./shared/interfaces/global";
import { CreateDepositComponent } from './shared/deposits/create-deposit/create-deposit.component';
import {ClientDeposit} from "./shared/interfaces/ClientDeposit";


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    TransactionsComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    DepositsComponent,
    CreateDepositComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AdminService,Global,DepositService,ClientDeposit],
  bootstrap: [AppComponent]
})
export class AppModule { }
