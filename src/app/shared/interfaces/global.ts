import {Injectable} from '@angular/core';
import {User} from "./User";

@Injectable()
export class Global{
  private params: any=[];
  currentUser!: User;


  constructor() {
    this.currentUser=JSON.parse(localStorage.getItem('currentUser')!);
  }

}
