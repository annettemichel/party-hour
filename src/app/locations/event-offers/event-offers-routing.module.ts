import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventOffersPage } from './event-offers.page';

const routes: Routes = [
  {
    path: '',
    component: EventOffersPage
  },
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'edit-event',
    loadChildren: () => import('./edit-event/edit-event.module').then( m => m.EditEventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventOffersPageRoutingModule {}
