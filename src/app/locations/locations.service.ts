import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { Location } from './location.model';
import { take, map, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LocationPosition } from './position.model';

interface LocationData {
  date: string;
  description: string;
  entrytime: string;
  genre: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
  position: LocationPosition;
}

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private _locations = new BehaviorSubject<Location[]>([
 ]);

  // return object of locations
  get locations() {
    return this._locations.asObservable();
  }

  constructor(
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient
  ) {}

  getDbLocations() {
    return this.httpClient
      .get<{ [key: string]: LocationData }>(
        'https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/offered-locations.json'
      )
      .pipe(
        map((responseData) => {
          const locations = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              locations.push(
                new Location(
                  key,
                  responseData[key].userId,
                  responseData[key].imageUrl,
                  responseData[key].date,
                  responseData[key].title,
                  responseData[key].description,
                  responseData[key].entrytime,
                  responseData[key].genre,
                  responseData[key].price,
                  //responseData[key].location,
                  responseData[key].position
                )
              );
            }
          }
          return locations;
        }),
        tap((locations) => {
          this._locations.next(locations);
        })
      );
  }

  getLocation(id: string) {
    return this.httpClient
      .get<LocationData>(
        `https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/offered-locations/${id}.json`
      )
      .pipe(
        map(
          (locationData) =>
            new Location(
              id,
              locationData.userId,
              locationData.imageUrl,
              locationData.date,
              locationData.title,
              locationData.description,
              locationData.entrytime,
              locationData.genre,
              locationData.price,
              //locationData.location,
              locationData.position
            )
        )
      );
  }

  addLocation(
    date: string,
    title: string,
    description: string,
    entrytime: string,
    genre: string,
    price: number,
    position: LocationPosition
  ) {
    const newLocation = new Location(
      Math.random().toString(),
      this.authenticationService.userId,
      // eslint-disable-next-line max-len
      'https://media.istockphoto.com/vectors/electronic-music-festival-disco-party-poster-set-with-equalizer-lines-vector-id1181920661?b=1&k=20&m=1181920661&s=612x612&w=0&h=7ocO9a6Ke8F1jAUdEkfBJ8YJ0sIkoRr-P753GmWWJp4=',
      date,
      title,
      description,
      entrytime,
      genre,
      price,
      position
    );

    return this.httpClient
      .post<{ name: string }>(
        'https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/offered-locations.json',
        {
          ...newLocation,
          id: null,
        }
      )
      .subscribe((data) => {
        newLocation.id = data.name;
        this._locations.next(Object.values(this.locations).concat(newLocation));
      });
  }

  editLocation(
    locationId: string,
    title: string,
    description: string,
    genre: string,
    price: number
  ) {
    let editedLocations: Location[];
    return this.locations.pipe(
      take(1),
      switchMap((locations) => {
        const editedLocationIndex = locations.findIndex(
          (pl) => pl.id === locationId
        );
        editedLocations = [...locations];
        const oldLocation = editedLocations[editedLocationIndex];
        editedLocations[editedLocationIndex] = new Location(
          oldLocation.id,
          oldLocation.userId,
          oldLocation.imageUrl,
          oldLocation.date,
          title,
          description,
          oldLocation.entrytime,
          genre,
          price,
          //oldLocation.location,
          oldLocation.position
        );
        return this.httpClient.put(
          `https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/offered-locations/${locationId}.json`,
          { ...editedLocations[editedLocationIndex], id: null }
        );
      }),
      tap(() => {
        this._locations.next(editedLocations);
      })
    );
  }
}
