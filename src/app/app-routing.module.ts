import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TransactionsComponent} from "./shared/transactions/component/transactions.component";
import {AdminPageComponent} from "./shared/admin-page/component/admin-page.component";
import {LoginPageComponent} from "./shared/login-page/component/login-page.component";
import {HomePageComponent} from "./shared/home-page/home-page.component";

import {RegistrationPageComponent} from "./shared/registration-page/component/registration-page.component";
import {UserDetailsComponent} from "./shared/admin-page/user-details/user-details.component";
import {UpdateUserComponent} from "./shared/admin-page/update-user/update-user.component";


const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'home-page'},
  {path: 'transactions',component:TransactionsComponent},
  {path: 'admin-page', component:AdminPageComponent},
  {path: 'login-page', component:LoginPageComponent},
  {path: 'reg-page', component:RegistrationPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path:'update-user', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
