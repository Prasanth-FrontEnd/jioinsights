import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/auth/authguard.service';
import { LoginService } from './login.service';
import { PasswordStrengthValidator } from './password-strength.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public incorrect: boolean = false;
  public usersList: any[] = [];
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authGuardService: AuthguardService,
    public dialog: MatDialog,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',
        Validators.compose([
        Validators.required, Validators.minLength(8), Validators.maxLength(16), PasswordStrengthValidator])]
  });
  }

  ngOnInit(): void {
  }

  getError(el: any) {
    switch (el) {
      case 'email':
        if (this.loginForm.get('email')?.hasError('required')) {
          return 'Email is required';
        }
        break;
      case 'password':
        if (this.loginForm.get('password')?.errors) {
          return 'Password is required';
        }
        break;
      default:
        return '';
    }
    return '';
  }

  submit() {
    this.loginService.getUserList().subscribe((data: any) => {
      this.usersList = data;
      const isLoggedIn = this.usersList.filter((item, index) => item.email === this.loginForm.value.email);
      if(isLoggedIn && isLoggedIn.length > 0 && isLoggedIn.length !== 0) {
        this.authGuardService.isLogged(true);
        this.dialog.closeAll();
        this.router.navigate(['/home']);
        let userName = '';
        for(let user of isLoggedIn) {
          userName = user.firstName;
        }
        localStorage.setItem('users', userName);
      } else if(isLoggedIn.length === 0){
        this.incorrect = true;
        this.authGuardService.isLogged(false);
      }
    });
  }
}
