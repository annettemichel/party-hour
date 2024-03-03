import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import {Location} from '../../locations/location.model'

@Component({
  selector: 'app-confirm-attend',
  templateUrl: './confirm-attend.component.html',
  styleUrls: ['./confirm-attend.component.scss'],
})

export class ConfirmAttendComponent implements OnInit {
  @Input() selectedLocation: Location;

  constructor(private mondalCtrl: ModalController) { }

  ngOnInit() {}

  onClose(){
    this.mondalCtrl.dismiss(null, 'close', );
  }
  onVisitEvent(){
    //TODO
    this.mondalCtrl.dismiss({message: 'Hier ist ein Testmessage!'}, 'confirm');
  }
}
