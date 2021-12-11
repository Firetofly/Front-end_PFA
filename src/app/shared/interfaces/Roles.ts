import {User} from "./User";

export class Roles {
  constructor(public id: number, public displayName: string, public description: string,public client:User) {
  }
}
