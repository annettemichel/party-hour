import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';

import { LocationsPage } from './locations.page';


//Quelle: https://www.youtube.com/watch?v=0QlEavSZDB0
const routes: Routes = [
  {
    path: '',
    component: LocationsPage,
    children: [
      {
        /*----------- SEARCH-NAVIGATION ----------*/
        path:'search',
        children: [
          {
            path: '',
            loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
          },
          {
            path: ':locationId',
            loadChildren: () => import('./search/locations-detail/locations-detail.module').then( m => m.LocationsDetailPageModule)
          }
        ]
      },

      /*------------ EVENT-OFFERS-NAVIGATION -----------*/
      {
        path: 'event-offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./event-offers/event-offers.module').then( m => m.EventOffersPageModule)
          },
          {
            path: 'create-event',
            loadChildren: () => import('./event-offers/create-event/create-event.module').then( m => m.CreateEventPageModule)
          },
          {
            path: 'edit-event/:locationId',
            loadChildren: () => import('./event-offers/edit-event/edit-event.module').then( m => m.EditEventPageModule)
          }
        ]
      },
      {
        path: 'attend',
        loadChildren: () => import('./../attend/attend.module').then( m => m.AttendPageModule),
        canLoad: [AuthenticationGuard]
      },
      {
        path: 'authentication',
        loadChildren: () => import('./../authentication/authentication.module').then( m => m.AuthenticationPageModule)
      },
      {
        path: '',
        redirectTo: 'locations/search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'locations/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsPageRoutingModule {}
