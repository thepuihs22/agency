import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { map } from 'rxjs/operators';
import { Lightbox } from '@ngx-gallery/lightbox';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { liveStreaming,
        standardMarathon,
        motorSport,
        launching,
        party,
        musicFest,
        troop,
        expo,
        healthFair,
        schoolTour,
        csr,
        shop,
        photobooth,
        sport,
        seminar} from '../image/gallery1';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [NgbTabsetConfig, NgbModalConfig]
})
export class ModalComponent implements OnInit {
@Input() lesson: any;
items: GalleryItem[];
data2: any;
tab: any;
  constructor(public activeModal: NgbActiveModal, public gallery: Gallery,
    public lightbox: Lightbox, config: NgbTabsetConfig, config2: NgbModalConfig) {
        config.justify = 'center';
        config.type = 'pills';
        config2.keyboard = true;
    }

  ngOnInit() {
    switch (this.lesson[0]) {
        case 1:
            switch (this.lesson[1]) {
                case '1':
                    this.tab = 1;
                    this.data2 = this.run(liveStreaming);
                break;
                case '2':
                    this.tab = 2;
                    this.data2 = this.run(standardMarathon);
                break;
                case '3':
                    this.tab = 3;
                    this.data2 = this.run(motorSport);
                break;
            }
        break;
        case 2:
          switch (this.lesson[1]) {
            case '1':
                this.tab = 4;
                this.data2 = this.run(launching);
            break;
            case '2':
                this.tab = 5;
                this.data2 = this.run(party);
            break;
            case '3':
                this.tab = 6;
                this.data2 = this.run(musicFest);
            break;
          }
        break;
        case 3:
          switch (this.lesson[1]) {
            case '1':
                this.tab = 7;
                this.data2 = this.run(troop);
            break;
            case '2':
                this.tab = 8;
                this.data2 = this.run(expo);
            break;
            case '3':
                this.tab = 9;
                this.data2 = this.run(healthFair);
            break;
          }
        break;
        case 4:
          switch (this.lesson[1]) {
            case '1':
                this.tab = 10;
                this.data2 = this.run(schoolTour);
            break;
            case '2':
                this.tab = 11;
                this.data2 = this.run(csr);
            break;
            case '3':
                this.tab = 12;
                this.data2 = this.run(shop);
            break;
        }
        break;
        case 5:
          switch (this.lesson[1]) {
            case '1':
                this.tab = 13;
                this.data2 = this.run(photobooth);
            break;
            case '2':
                this.tab = 14;
                this.data2 = this.run(sport);
            break;
            case '3':
              this.tab = 15;
              this.data2 = this.run(seminar);
          break;
        }
        break;
    }
    this.items = this.data2;
  }

  run(data) {
    // tslint:disable-next-line:prefer-const
    let dataArr = [];
    data.forEach(it => {
      dataArr.push(this.setData(it));
    })
    return dataArr;
  }

  setData(value) {
    return value.map(item =>
        new ImageItem({ src: item.srcUrl, thumb: item.previewUrl, name: item.name })
    );
  }
}


