import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../dialogs/login/login.service';
import { AuthguardService } from '../auth/authguard.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactForm: FormGroup;
  allCompanies: any[] = [];
  company: any;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private authGuardService: AuthguardService
    ) {
      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        country: ['', Validators.required],
        phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.homeService.getCompanies().subscribe((data: any) => {
      this.allCompanies = data;
    });

  }

  getError(el: any) {
    switch (el) {
      case 'email':
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

  onSelect(event: any) {
    this.allCompanies.filter(item => {
      if(item.name === event) {
        console.log(item);
        this.company = item;
      }
    });
  }

  submit() {

  }

  isAuthenticated() {
    return this.authGuardService.isAuthenticated.value;
  }
}
