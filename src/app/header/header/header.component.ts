import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/auth/authguard.service';
import { LoginComponent } from 'src/app/dialogs/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false;
  public userName: string = '';

  constructor(
    public dialog: MatDialog,
    private authGuardService: AuthguardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authGuardService.isAuthenticated.subscribe(result => {
      if (result === true) {
        this.isLoggedIn = true;
        this.userName = localStorage.getItem('users') || '';
      }
    });
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logout() {
    this.router.navigate(['/home']);
    this.isLoggedIn = false;
    this.authGuardService.isLogged(false);
  }
}
