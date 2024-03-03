import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendPageRoutingModule } from './attend-routing.module';

import { AttendPage } from './attend.page';
import { ConfirmAttendComponent } from './confirm-attend/confirm-attend.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendPageRoutingModule
  ],
  declarations: [
    AttendPage,
    //ConfirmAttendComponent
  ]
})
export class AttendPageModule {}
