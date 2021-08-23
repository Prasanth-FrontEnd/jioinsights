import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { MediacompanySharedModuleModule } from '../shared/mediacompany-shared-module/mediacompany-shared-module.module';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgbModule,
    MediacompanySharedModuleModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GalleryModule { }
