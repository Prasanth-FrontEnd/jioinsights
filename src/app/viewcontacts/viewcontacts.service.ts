import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewContactsService {
  private getContactsListUrl = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts';
  constructor(private http: HttpClient) { }

  getContacts() : Observable<any> {
    return this.http.get(this.getContactsListUrl);
  }

  addContact(contact: any): Observable<any> {
    return this.http.post('anyApi', {contact});
  }

  updateContact(contact: any): Observable<any> {
    return this.http.put('anyApi', {contact});
  }

  deleteContact(contactID: any): Observable<any> {
    return this.http.delete('anyApi', {
      params: {
          providerId: contactID
      }
    });
  }
}
