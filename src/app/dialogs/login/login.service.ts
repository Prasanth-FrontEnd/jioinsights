import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Login {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  companyId: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private getUserListUrl = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users';

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get(this.getUserListUrl);
  }
}
