import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../auth/authentication.guard';
import { ViewcontactsComponent } from './viewcontacts.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ViewcontactsComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewContactsRoutingModule { }
