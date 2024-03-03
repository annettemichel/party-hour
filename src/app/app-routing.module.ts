import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./locations/locations.module').then(m => m.LocationsPageModule)
  },
 {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./locations/search/search.module').then( m => m.SearchPageModule),
    canLoad: [AuthenticationGuard]
  },
  {
    path: 'event-offers',
    loadChildren: () => import('./locations/event-offers/event-offers.module').then( m => m.EventOffersPageModule),
    canLoad: [AuthenticationGuard]
  },
  {
    path: 'attend',
    loadChildren: () => import('./attend/attend.module').then( m => m.AttendPageModule),
    canLoad: [AuthenticationGuard]
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule),
    canLoad: [AuthenticationGuard],
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
