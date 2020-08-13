import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agency-video',
  templateUrl: './agency-video.component.html',
  styleUrls: ['./agency-video.component.scss']
})
export class AgencyVideoComponent implements OnInit {
  lat = 13.653392999999999;
  lng = 100.591905;
  previous;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  updateDiv(data) {
    console.log(data);
    this.previous = data;
    // https://www.google.com/maps?ll=13.723238,100.538778&z=15&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=7266153672920081334
  }
}