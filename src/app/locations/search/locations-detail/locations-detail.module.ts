import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationsDetailPageRoutingModule } from './locations-detail-routing.module';

import { LocationsDetailPage } from './locations-detail.page';
import { ConfirmAttendComponent } from '../../../attend/confirm-attend/confirm-attend.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationsDetailPageRoutingModule
  ],
  declarations: [
    LocationsDetailPage,
    ConfirmAttendComponent
  ]
})
export class LocationsDetailPageModule {}
