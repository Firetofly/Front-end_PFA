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



@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    TransactionsComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
