import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventOffersPageRoutingModule } from './event-offers-routing.module';

import { EventOffersPage } from './event-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventOffersPageRoutingModule
  ],
  declarations: [EventOffersPage]
})
export class EventOffersPageModule {}
