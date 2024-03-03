import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { LocationsService } from '../../locations.service';
import { LocationPosition } from '../../position.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  showPicker = false;
  showDateTime = false;
  dateValue = new Date(Date.now()).toISOString();
  timeValue = new Date(Date.now()).toISOString();
  eventDate = null;
  eventTime = null;

  formattedDateString = '';
  formattedTimeString = '';
  today;

  pickedLocationString = '';
  @ViewChild(IonDatetime) dateCalendar: IonDatetime;
  @ViewChild(IonDatetime) dateTime: IonDatetime;

  form: FormGroup;

  constructor(
    private router: Router,
    private locationService: LocationsService
  ) {
    this.setToday();
    this.today = new Date().toISOString();
  }

  ngOnInit() {
    this.form = new FormGroup({

      date: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(64)],
      }),
      entrytime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      genre: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      location: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      position: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onPositionPicked(position: LocationPosition) {
    this.form.patchValue({ position });
    this.pickedLocationString = position.address;
    console.log(position);
  }

  setToday() {
    this.formattedDateString = format(new Date(), 'dd.MM.yyyy');
    //this.formattedString = format(parseISO(format(new Date(), 'yyyy-mm-dd')), 'MMM d, yyyy');
  }
  setTimeToday() {
    //TODO
    this.formattedTimeString = format(new Date(), 'HH:mm');
  }

  dateChanged(value) {
    // TODO
    this.eventDate = format(parseISO(value), 'dd.MM.yyyy');
    this.eventTime = format(parseISO(value), 'HH:mm');
    this.dateValue = value;
    console.log(this.eventDate);
    this.formattedDateString = format(parseISO(value), 'dd.MM.yyyy');
    this.showPicker = false;
  }

  positionChangend() {}

  timeChanged(value) {
    this.timeValue = value;
    this.formattedTimeString = format(parseISO(value), 'HH:mm');
    console.log(this.formattedTimeString);
  }

  onClose() {
    this.dateCalendar.cancel(true);
    this.dateTime.cancel(true);
  }

  onSelect() {
    this.dateCalendar.confirm(true);
    this.dateTime.cancel(true);
  }

  onImagePicked(imageData: string) {}

  onCreateEvent() {
    /*if(!this.form.valid){
      return;
    }*/
    this.locationService.addLocation(
      this.eventDate,
      this.form.value.title,
      this.form.value.description,
      this.eventTime,
      this.form.value.genre,
      +this.form.value.price,
      this.form.value.position
    );

    this.form.reset();
    this.router.navigate(['/locations/event-offers']);
  }
}
