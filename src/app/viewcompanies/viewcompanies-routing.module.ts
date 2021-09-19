import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../auth/authentication.guard';
import { ViewcompaniesComponent } from './viewcompanies.component';

const routes: Routes = [
  {
    path: 'companies',
    component: ViewcompaniesComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCompaniesRoutingModule { }
