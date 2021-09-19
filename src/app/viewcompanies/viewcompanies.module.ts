import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCompaniesRoutingModule } from './viewcompanies-routing.module';
import { ViewcompaniesComponent } from './viewcompanies.component';
import { JioinsightsSharedModuleModule } from '../shared/jioinsightscompany-shared-module/jioinsightscompany-shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewcompaniesComponent
  ],
  imports: [
    CommonModule,
    ViewCompaniesRoutingModule,
    JioinsightsSharedModuleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewCompaniesModule { }
