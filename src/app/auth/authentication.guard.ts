import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../dialogs/login/login.component';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authGuardService: AuthguardService,
    public dialog: MatDialog) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authGuardService.isAuthenticated.value === true) {
        return true;
      } else {
        const dialogRef = this.dialog.open(LoginComponent, {
          width: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
    return false;
  }

}
