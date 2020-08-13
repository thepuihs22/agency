import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInRight } from 'ng-animate';
import { BreakConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-agency-services',
  templateUrl: './agency-services.component.html',
  styleUrls: ['./agency-services.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))])]
})
export class AgencyServicesComponent implements OnInit {

  fadeInRight: any;
  data1: false;
  data2: false;
  data3: false;
  data4: false;
  data5: false;
  data6: false;
  data7: false;
  data8: false;
  data9: false;

  constructor() { }

  ngOnInit() {
  }

  data(isMouseEnter, datata) {
    console.log(isMouseEnter);
    console.log(datata);
    switch (datata) {
      case 1:
        this.data1 = isMouseEnter;
        break;
      case 2:
        this.data2 = isMouseEnter;
        break;
      case 3:
          this.data3 = isMouseEnter;
          break;
      case 4:
        this.data4 = isMouseEnter;
        break;
      case 5:
        this.data5 = isMouseEnter;
        break;
      case 6:
        this.data6 = isMouseEnter;
        break;
      case 7:
        this.data7 = isMouseEnter;
        break;
      case 8:
        this.data8 = isMouseEnter;
        break;
      case 9:
        this.data9 = isMouseEnter;
        break;
      default:
        this.data1 = isMouseEnter;
        break;
    }
  }
}
