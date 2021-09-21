import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContactsRoutingModule } from './viewcontacts-routing.module';
import { ViewcontactsComponent } from './viewcontacts.component';
import { JioinsightsSharedModuleModule } from '../shared/jioinsightscompany-shared-module/jioinsightscompany-shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewcontactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewContactsRoutingModule,
    JioinsightsSharedModuleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewContactsModule { }
