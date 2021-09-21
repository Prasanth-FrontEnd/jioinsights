import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../auth/authguard.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allCompanies: any[] = [];
  company: any;

  constructor(
    private homeService: HomeService,
    private authGuardService: AuthguardService
    ) {
  }

  ngOnInit(): void {
    this.homeService.getCompanies().subscribe((data: any) => {
      this.allCompanies = data;
    });

  }

  onSelect(event: any) {
    this.allCompanies.filter(item => {
      if(item.name === event) {
        this.company = item;
      }
    });
  }

  isAuthenticated() {
    return this.authGuardService.isAuthenticated.value;
  }
}
