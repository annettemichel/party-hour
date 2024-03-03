import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('map', { static: false }) mapElementReference: ElementRef;
  clickListener: any;
  googleMaps: any;

  // initial center position for the map
  latitude = 52.2713509;
  longitude = 8.05052016;
  zoomNumber = 14;
  constructor(private modalCtrl: ModalController, private renderer: Renderer2) { }

  ngOnInit() {}

  //https://stackblitz.com/edit/angular-google-maps-demo
  ngAfterViewInit(): void {
    this.getGoogleMaps().then(googleMaps => {
      const mapElement = this.mapElementReference.nativeElement;
      const map = new googleMaps.Map(mapElement, {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: this.zoomNumber
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapElement, 'visible');
      });

      map.addListener('click', event => {
        const selectedCoords = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };
        this.modalCtrl.dismiss(selectedCoords);
      });
    }).catch(error => {
      console.log('error');
    });
  }

  onClose() {
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {
    if (this.clickListener) {
      this.googleMaps.event.removeListener(this.clickListener);
    }
  }

  private getGoogleMaps(): Promise<any>{
    const win = window as any;
    const googleModule = win.google;
    if(googleModule && googleModule.maps){
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject)=>{
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYdxCk5b4PLE0xbY0lK1DT_oVskVKbbPk';
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if(loadedGoogleModule && loadedGoogleModule.maps){
          resolve(loadedGoogleModule.maps);
        }else{
          reject('Google maps SDK ist nicht vorhanden');
        }
      };
    })
  }
}

