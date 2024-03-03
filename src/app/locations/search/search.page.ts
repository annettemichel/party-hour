import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { Location } from '../location.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
  embedLocations: Location[];
  listedEmbeddedLocations: Location[];
  private locationsSubscription: Subscription;
  isLoading = false;

  constructor(private locationsService: LocationsService) {}

  ngOnInit() {
    this.locationsSubscription = this.locationsService.locations.subscribe(
      (locations) => {
        this.embedLocations = locations;
        this.listedEmbeddedLocations = this.embedLocations.slice(1);
      }
    );
  }
  ionViewWillEnter() {
    this.isLoading = true;
    this.locationsService.getDbLocations().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.locationsSubscription) {
      this.locationsSubscription.unsubscribe();
    }
  }
}
