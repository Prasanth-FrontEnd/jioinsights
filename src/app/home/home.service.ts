import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private getCompaniesListUrl = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies';
  constructor(private http: HttpClient) { }

  getCompanies() : Observable<any> {
    return this.http.get(this.getCompaniesListUrl);
  }
}
