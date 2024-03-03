import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
import { AttendData } from './attend-data.model';

interface AttendDatas {
  locationDate: string;
  locationGenre: string;
  locationId: string;
  locationImage: string;
  locationPrice: number;
  locationTitle: string;
  userId:string;
}

@Injectable({ providedIn: 'root' })
export class AttendService {
  private _attend = new BehaviorSubject<AttendData[]>([]);

  get attend() {
    return this._attend.asObservable();
  }
  constructor(
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient
  ) {}

  confirmAttend(
    locationId: string,
    locatonImage: string,
    locationDate: string,
    locationTitle: string,
    locationGenre: string,
    locationPrice: number
  ) {
    let generatedId: string;
    const newAttendData = new AttendData(
      Math.random().toString(),
      locatonImage,
      locationDate,
      locationTitle,
      locationGenre,
      locationPrice,
      locationId,
      this.authenticationService.userId
    );
    return this.httpClient
      .post<{ name: string }>(
        'https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/attendData.json',
        { ...newAttendData, id: null }
      )
      .subscribe((data) => {
        newAttendData.id = data.name;
        this._attend.next(Object.values(this.attend).concat(newAttendData));
      });
  }

  getDbAttendData() {
    
    return this.httpClient
      .get<{ [key: string]: AttendDatas }>(
        `https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/attendData.json?orderBy="userId"&equalTo="${
          this.authenticationService.userId
        }"`
      )
      .pipe(
        map((responseData) => {
          const attends = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
                attends.push(
                new AttendData(
                  key,
                  responseData[key].locationImage,
                  responseData[key].locationDate,
                  responseData[key].locationTitle,
                  responseData[key].locationGenre,
                  responseData[key].locationPrice,
                  responseData[key].locationId,
                  responseData[key].userId,
                )
              );
            }
          }
          return attends;
          // return [];
        }),
        tap((attends) => {
          this._attend.next(attends);
        })
      );
  }

  cancelAttend(attendId: string) {
    return this.httpClient
      .delete(
        `https://eh-eventhour-default-rtdb.europe-west1.firebasedatabase.app/attendData/${attendId}.json`
      )
      .pipe(
        switchMap(() => {
          return this.attend;
        }),
        take(1),
        tap(attend => {
          this._attend.next(attend.filter(a => a.id !== attendId));
        })
      );
  }
}
