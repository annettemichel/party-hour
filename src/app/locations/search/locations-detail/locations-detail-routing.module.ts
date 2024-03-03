import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsDetailPage } from './locations-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LocationsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsDetailPageRoutingModule {}
