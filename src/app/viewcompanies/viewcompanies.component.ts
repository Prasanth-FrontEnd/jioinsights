import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-viewcompanies',
  templateUrl: './viewcompanies.component.html',
  styleUrls: ['./viewcompanies.component.css']
})
export class ViewcompaniesComponent implements OnInit {

  allCompanies: any[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCompanies().subscribe((data: any) => {
      this.allCompanies = data;
    })
  }

}
