import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AttendData } from './attend-data.model';
import { AttendService } from './attend.service';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.page.html',
  styleUrls: ['./attend.page.scss'],
})
export class AttendPage implements OnInit, OnDestroy {
  isLoading = false;
  embeddedAttends: AttendData[];
  private attendSubscription: Subscription

  constructor(private attendService: AttendService) { }

  ngOnInit() {
    this.attendService.attend.subscribe(attend =>{
      this.embeddedAttends = attend;

    });
  }
  ionViewWillEnter(){
    this.isLoading = true;
    this.attendService.getDbAttendData().subscribe(() =>{
      this.isLoading=false;
    });
  }

  onCancelAttend(attendId:string, itemSliding: IonItemSliding){
    itemSliding.close();
    this.attendService.cancelAttend(attendId).subscribe();
    console.log('Die Absage ist eingegangen!');
  }
  ngOnDestroy() {
    if (this.attendSubscription) {
      this.attendSubscription.unsubscribe();
    }
  }
}
