import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { map, switchMap } from 'rxjs/operators';
import { Coordinates, LocationPosition } from 'src/app/locations/position.model';
import { MapModalComponent } from 'src/shared/map-modal/map-modal.component';
import { of } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  @Output() positionPick = new EventEmitter<LocationPosition>();

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController, private httpClient: HttpClient, private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {}

  onPickLocation() {
    this.actionSheetCtrl
    .create({
      header: 'Auswahl',
      buttons: [
        {
          text: 'Standort teilen',
          handler: () => {
            this.locateUser();
          }
        },
        {
          text: 'Standort auswählen',
          handler: () => {
            this.openMap();
          }
        },
        { text: 'Cancel', role: 'cancel' }
      ]
    })
    .then(actionSheetElement => {
      actionSheetElement.present();
    });
  }
    private locateUser() {
      if (!Capacitor.isPluginAvailable('Geolocation')) {
        this.showErrorAlert();
        return;
      }

      Geolocation.getCurrentPosition()
        .then(geoPosition => {
          const coordinates: Coordinates = {
            lat: geoPosition.coords.latitude,
            lng: geoPosition.coords.longitude
          };
          this.createPlace(coordinates.lat, coordinates.lng);

        })
        .catch(err => {

          this.showErrorAlert();
        });
    }

    private openMap() {
      this.modalCtrl.create({ component: MapModalComponent }).then(modalEl => {
        modalEl.onDidDismiss().then(modalData => {
          if (!modalData.data) {
            return;
          }
          const coordinates: Coordinates = {
            lat: modalData.data.lat,
            lng: modalData.data.lng
          };
          this.createPlace(coordinates.lat, coordinates.lng);
        });
        modalEl.present();
      });
    }

    private createPlace(lat: number, lng: number) {
      const pickedPosition: LocationPosition = {
        lat: lat,
        lng: lng,
        address: null,
        staticMapImageUrl: null
      };
      this.getAddress(lat,lng)
      .pipe(
        switchMap(address => {
          pickedPosition.address = address;
          return of(
            this.getMapImage(pickedPosition.lat, pickedPosition.lng, 14)
          );
        })
      )
      .subscribe(staticMapImageUrl => {
        pickedPosition.staticMapImageUrl = staticMapImageUrl;
        this.positionPick.emit(pickedPosition);
      });
    }

    private showErrorAlert() {
      this.alertCtrl
        .create({
          header: 'Standort konnte nicht ermittelt werden',
          message: 'Bitte nutze die Karte um den Standort auszuwählen',
          buttons: ['Ok']
        })
        .then(alertEl => alertEl.present());
    }

  //https://developers.google.com/maps/documentation/geocoding/start#reverse
  private getAddress(lat: number, lng: number) {

    let headers = new HttpHeaders();

    return this.httpClient

      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDYdxCk5b4PLE0xbY0lK1DT_oVskVKbbPk`
      )
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || geoData.results.length === 0) {
            return null;
          }
          return geoData.results[0].formatted_address;

        })
      );
  }

  //https://developers.google.com/maps/documentation/maps-static/overview
  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:blue%7Clabel:Place%7C${lat},${lng}
    &key=AIzaSyBCSm9_EeqIoH-VSavl28oRYCX-GZIxCaE`;
  }

}
