import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInLeft } from 'ng-animate';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-agency-content',
  templateUrl: './agency-content.component.html',
  styleUrls: ['./agency-content.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 3, delay: 0 }
    }))])]
})
export class AgencyContentComponent implements OnInit {

  fadeInLeft:any;
  constructor(private vps: ViewportScroller) { }

  ngOnInit() {
  }

  scroll(id) {
    this.vps.scrollToAnchor(id);
  }

}
