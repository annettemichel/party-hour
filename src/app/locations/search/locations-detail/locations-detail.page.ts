import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { of, Subscription } from 'rxjs';
import { AttendService } from '../../../attend/attend.service';
import { ConfirmAttendComponent } from '../../../attend/confirm-attend/confirm-attend.component';
import { Location } from '../../location.model';
import { LocationsService } from '../../locations.service';

@Component({
  selector: 'app-locations-detail',
  templateUrl: './locations-detail.page.html',
  styleUrls: ['./locations-detail.page.scss'],
})
export class LocationsDetailPage implements OnInit, OnDestroy {
  location: Location;
  private locationsSubscription: Subscription;
  isLoading = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private locationService: LocationsService,
    private modalCtrl: ModalController,
    private attendService: AttendService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('locationId')) {
        this.navCtrl.navigateBack('/search');
        return;
      }
      this.isLoading = true;
      this.locationsSubscription = this.locationService
        .getLocation(paramMap.get('locationId'))
        .subscribe((location) => {
          this.location = location;
          this.isLoading = false;
        });
    });
  }

  onVisitEvent() {
    this.modalCtrl
      .create({
        component: ConfirmAttendComponent,
        componentProps: { selectedLocation: this.location },
      })
      .then((modalElement) => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })

      .then((resultData) => {
        if (resultData.role === 'confirm') {
          this.attendService.confirmAttend(
            this.location.id,
            this.location.imageUrl,
            this.location.date,
            this.location.title,
            this.location.genre,
            this.location.price
          );
          console.log('Teilgenommen!');
        }
      });
  }

  ngOnDestroy() {
    if (this.locationsSubscription) {
      this.locationsSubscription.unsubscribe();
    }
  }
}
