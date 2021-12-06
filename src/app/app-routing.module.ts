import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TransactionsComponent} from "./shared/transactions/component/transactions.component";
import {AdminPageComponent} from "./shared/admin-page/component/admin-page.component";
import {LoginPageComponent} from "./shared/login-page/component/login-page.component";
import {HomePageComponent} from "./shared/home-page/home-page.component";

import {RegistrationPageComponent} from "./shared/registration-page/component/registration-page.component";


const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'home-page'},
  {path: 'transactions',component:TransactionsComponent},
  {path: 'admin-page', component:AdminPageComponent},
  {path: 'login-page', component:LoginPageComponent},
  {path: 'reg-page', component:RegistrationPageComponent},
  {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
