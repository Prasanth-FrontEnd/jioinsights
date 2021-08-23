import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/auth/authguard.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public incorrect: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authGuardService: AuthguardService,
    public dialog: MatDialog,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit(): void {
  }

  getError(el: any) {
    switch (el) {
      case 'email':
        if (this.loginForm.get('email')?.hasError('required')) {
          return 'Email required';
        }
        break;
      case 'pass':
        if (this.loginForm.get('password')?.hasError('required')) {
          return 'Password required';
        }
        break;
      case 'incorrect':
        if(el === 'incorrect') {
          return 'Incorrect email or password!';
        }
        break;
      default:
        return '';
    }
    return '';
  }

  submit() {
    const users = this.loginService.getUserList();
    const isLoggedIn = users.filter((item, index) => item.userid === this.loginForm.value.email && item.password === this.loginForm.value.password);
    if(isLoggedIn && isLoggedIn.length > 0 && isLoggedIn.length !== 0) {
      this.authGuardService.isLogged(true);
      this.dialog.closeAll();
      this.router.navigate(['/gallery']);
      let userName = '';
      for(let user of isLoggedIn) {
        userName = user.username;
      }
      localStorage.setItem('users', userName);
    } else if(isLoggedIn.length === 0){
      this.incorrect = true;
      this.authGuardService.isLogged(false);
    }
  }
}
