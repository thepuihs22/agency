import { Component, OnInit, HostListener} from '@angular/core';
import { SharedService } from '../../../shared/service/share-data.service';

@Component({
  selector: 'app-agency-nav',
  templateUrl: './agency-nav.component.html',
  styleUrls: ['./agency-nav.component.scss']
})
export class AgencyNavComponent implements OnInit {
  test = true;
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPosition < 900) {
      this.test = true;
    } else {
      this.test = false;
    }
    this.sharedService.nextMessage(this.test);
  }
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.nextMessage(true);
  }

  nameEventHander($event: any) {
    if($event === 'home') {
      this.test = true;
    } else {
      this.test = false;
    }
    this.sharedService.nextMessage(this.test);
  }

}
