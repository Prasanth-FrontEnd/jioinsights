import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewContactsService } from './viewcontacts.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.css']
})
export class ViewcontactsComponent implements OnInit {

  contactForm: FormGroup;
  addContact: boolean = false;
  editContact: boolean = false;
  deleteContact: boolean = false;
  toBeEdited: any;
  buttonText: string = '';
  allContacts: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private viewContactsService: ViewContactsService,
    private _snackBar: MatSnackBar) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  getError(el: any) {
    switch (el) {
      case 'name':
        if (this.contactForm.get('name')?.hasError('required')) {
          return 'Name required';
        }
        break;
      case 'country':
        if (this.contactForm.get('country')?.hasError('required')) {
          return 'Country required';
        }
        break;
      case 'phone':
        if (this.contactForm.get('phone')?.hasError('required')) {
          return 'Phone required';
        }
        break;
      default:
        return '';
    }
    return '';
  }

  openSnackBar(message: string, action: string, duration: any) {
    this._snackBar.open(message, action, {
      duration : duration
    });
  }

  submit() {
    if (this.addContact === true && this.editContact === false) {
      this.contactForm.value['id'] = this.allContacts.length + 1;
      this.allContacts.push(this.contactForm.value);
      this.openSnackBar('Contact added successfully.', 'Close', 3000);
      this.contactForm.reset();
      this.viewContactsService.addContact(this.contactForm.value).subscribe(result => {

      });
    } else if (this.editContact === true && this.addContact === false) {
      this.allContacts.map(item => {
        if(this.toBeEdited.id === item.id) {
          item.name = this.contactForm.value.name;
          item.country = this.contactForm.value.country;
          item.phone = this.contactForm.value.phone;
          this.viewContactsService.updateContact(item).subscribe(result => {

          });
        }
      });

      this.openSnackBar('Contact updated successfully.', 'Close', 3000);
      this.contactForm.reset();
      this.buttonText = 'ADD';
      this.addContact = true;
      this.editContact = false;
    }
  }

  updateContact(contact: any) {
    this.toBeEdited = contact;
    this.editContact = true;
    this.addContact = false;
    this.buttonText = 'UPDATE';
    this.contactForm.setValue({
      name: contact.name,
      country: contact.country,
      phone: contact.phone
    });
  }

  deleteContactForm(contact: any) {
    this.allContacts.map((item, index) => {
      if(contact.id === item.id) {
        this.allContacts.splice(index, 1);
        this.viewContactsService.deleteContact(contact.id).subscribe(result => {

        });
      }
    });
    this.openSnackBar('Contact deleted successfully.', 'Close', 3000);
  }

  ngOnInit(): void {
    this.addContact = true;
    this.buttonText = 'ADD';
    this.viewContactsService.getContacts().subscribe((data: any) => {
      this.allContacts = data;
    });
  }

}
