import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { Location } from '../location.model';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-offers',
  templateUrl: './event-offers.page.html',
  styleUrls: ['./event-offers.page.scss'],
})
export class EventOffersPage implements OnInit, OnDestroy {
  eventOffers: Location[];
  private locationsSubscription: Subscription;

  constructor(private locationService: LocationsService) {}

  onEdit(itemSliding: IonItemSliding) {
    itemSliding.close();
  }
  ngOnInit() {
    this.locationsSubscription = this.locationService.locations.subscribe(
      (locations) => {
        this.eventOffers = locations;
      }
    );
  }

  ionViewWillEnter() {
    this.locationService.getDbLocations().subscribe();
  }

  ngOnDestroy() {
    if (this.locationsSubscription) {
      this.locationsSubscription.unsubscribe();
    }
  }
}
