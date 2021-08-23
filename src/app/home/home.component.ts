import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Login, LoginService } from '../dialogs/login/login.service';
import { AuthguardService } from '../auth/authguard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl();
  filteredUsers: Observable<Login[]>;
  users: string[] = [];
  allUsers: any[] = [];

  @ViewChild('userInput') userInput: ElementRef<HTMLInputElement> | any;

  constructor(
    private loginService: LoginService,
    private authGuardService: AuthguardService
    ) {
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: string | null) => user === '@' ? this._filter(user) : []));
  }

  ngOnInit(): void {
    this.allUsers = this.loginService.getUserList();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.users.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.userCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.users.indexOf(fruit);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.users.push(event.option.viewValue);
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filter(value: string): Login[] {
    if (value === '@') {
      return this.allUsers.filter(fruit => fruit.username.toLowerCase());
    }
    return [];
  }

  isAuthenticated() {
    return this.authGuardService.isAuthenticated.value;
  }
}
