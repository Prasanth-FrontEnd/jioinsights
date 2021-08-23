import { Injectable } from '@angular/core';

export interface Login {
  userid: string;
  password: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private  userList: Login[] = [
    { userid : 'abc@media.com', password:'abc123', username:'tom'},
    { userid : 'def@media.com',password:'def123', username: 'dick'}
  ];

  constructor() { }

  getUserList() {
    return this.userList.slice();
  }
}
