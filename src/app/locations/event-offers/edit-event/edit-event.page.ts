import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Location } from '../../location.model';
import { LocationsService } from '../../locations.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit, OnDestroy {
  location: Location;
  form: FormGroup;
  LocationId: string;
  isLoading = false;
  private locationsSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private locationService: LocationsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('locationId')) {
        this.navCtrl.navigateBack('/event-offers');
        return;
      }
      this.isLoading = true;
      this.LocationId = paramMap.get('location.id');
      this.locationsSubscription = this.locationService
        .getLocation(paramMap.get('locationId'))
        .subscribe((location) => {
          this.location = location;

          this.form = new FormGroup({
            title: new FormControl(this.location.title, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            description: new FormControl(this.location.description, {
              updateOn: 'blur',
              validators: [Validators.required, Validators.maxLength(55)],
            }),
            genre: new FormControl(this.location.genre, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            price: new FormControl(this.location.price, {
              updateOn: 'blur',
              validators: [Validators.required, Validators.min(1)],
            }),
          });
          this.isLoading = false;
        });
    });
  }

  onEditEvent() {
    this.locationService
      .editLocation(
        this.location.id,
        this.form.value.title,
        this.form.value.description,
        this.form.value.genre,
        this.form.value.price
      )
      .subscribe(() => {
        this.form.reset();
        this.router.navigate(['/locations/event-offers']);
      });

    console.log(this.form);
  }
  ngOnDestroy() {
    if (this.locationsSubscription) {
      this.locationsSubscription.unsubscribe();
    }
  }
}
