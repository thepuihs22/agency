import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-agency-blog',
  templateUrl: './agency-blog.component.html',
  styleUrls: ['./agency-blog.component.scss']
})
export class AgencyBlogComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  // tslint:disable-next-line:member-ordering
  tab1 = [
    {
      imgTitle: 'assets/images/new/catagories/live_streaming/Live-Streaming.png',
      img: 'assets/images/new/catagories/live_streaming/Character-BG-01.png',
      title: 'สร้างสรรค์ประสบการณ์ใหม่\nด้วยการจัดงานผ่านระบบออนไลน์\nตอบรับวิถีชีวิตแบบใหม่ของเรา',
      description: 'New experience in online events for\n the new normal lifestyle',
      number: '1',
      name: 'Live Streaming'
    },
    {
      imgTitle: 'assets/images/new/catagories/Marathon/Marathon.png',
      img: 'assets/images/new/catagories/Marathon/Character-BG-02.png',
      title: 'มาราธอนมาตรฐานระดับโลก ที่รองรับด้วย การจัดการที่มีประสิทธิภาพ',
      description: 'World Stardard Marathan that supported by efficient management system',
      number: '2',
      name: 'Standard Marathon'
    },
    {
      imgTitle: 'assets/images/new/catagories/Motor Sports Festival/Motor-Sports-Festival.png',
      img: 'assets/images/new/catagories/Motor Sports Festival/Character-BG-03.png',
      title: 'มหกรรมความสนุกสุดเร้าใจ\nในงานมอเตอร์สปอร์ต',
      description: 'Festival of Entertainment & Exited activity in Race',
      number: '3',
      name: 'Motor Sports Festival'
    },
  ]

  tab2 = [
    {
      imgTitle: 'assets/images/new/catagories/Press Conf  Launching/Press-Conf-_-Launching.png',
      img: 'assets/images/new/catagories/Press Conf  Launching/Character-BG-2-10.png',
      title: 'งานแถลงข่าว และเปิดตัวสินค้าที่สร้างสรรค์ให้เข้ากับทุกแบรนด์และทุกไลฟ์สไตล์',
      description: 'All about Product launching and Press Conference that create for your brand',
      number: '1',
      name: 'Press Conference/Launching'
    },
    {
      imgTitle: 'assets/images/new/catagories/Party  Gala/_0001s_0005_Party-_-Gala.png',
      img: 'assets/images/new/catagories/Party  Gala/Character-BG-04.png',
      title: 'สร้างสรรค์ทุกงานปาร์ตี้\nอย่างสนุกสุดพิเศษให้น่าจดจำ',
      description: 'Create The Fabulous & Memorable Party',
      number: '2',
      name: 'Party/Gala'
    },
    {
      imgTitle: 'assets/images/new/catagories/Music Festival & Concert/Music-Festival-&-Concert.png',
      img: 'assets/images/new/catagories/Music Festival & Concert/Character-BG-2-03.png',
      title: 'มหกรรมแห่งเสียงดนตรี และความสนุก',
      description: 'The Great experience of Festive Music and Entertainment',
      number: '3',
      name: 'Music Festival & Concert'
    }
  ]

  tab3 = [
    {
      imgTitle: 'assets/images/new/catagories/Troop  Caravan/Troop_Caravan.png',
      img: 'assets/images/new/catagories/Troop  Caravan/Character-BG-06.png',
      title: 'ปรากฏการณ์ความสนุก\nบุกไปทุกพื้นที่ทั่วไทย',
      description: 'Go any way Do anything, \n Exploding the products & brand to markets',
      number: '1',
      name: 'Troop/Caravan'
    },
    {
      imgTitle: 'assets/images/new/catagories/Expo  Exhibition Trade Fair/Expo_Exhibition-_Trade-Fair.png',
      img: 'assets/images/new/catagories/Expo  Exhibition Trade Fair/Character-BG-2-04.png',
      title: 'มหกรรมการจัดแสดงสินค้า\nบูธและกิจกรรมส่งเสริมการตลาด',
      description: 'One Stop services in Expo, \n Exhibition and Trade Fair',
      number: '2',
      name: 'Expo/Exhibition/Trade Fair'
    },
    {
      imgTitle: 'assets/images/new/catagories/Health Fair/Health-Fair.png',
      img: 'assets/images/new/catagories/Health Fair/Character-BG-2-05.png',
      title: 'สัมผัสประสบการณ์งานอีเว้นท์\n สำหรับคนรักสุขภาพ เทรนด์ล่าสุดสำหรับ\nวิถีชีวิตแบบใหม่',
      description: 'The experience in Health & Exercise\nevent for the new normal living',
      number: '3',
      name: 'Health Fair'
    },
  ]

  tab4 = [
    {
      imgTitle: 'assets/images/new/catagories/School Tour  University Tour/School-Tour_University-Tour-.png',
      img: 'assets/images/new/catagories/School Tour  University Tour/Character-BG-2-07.png',
      title: 'กิจกรรมความสนุก และให้ความรู้วำสำหรับ\nนักเรียน นักศึกษา',
      description: 'Create the Edutainment activities\nfor students',
      number: '1',
      name: 'School Tour/University Tour'
    },
    {
      imgTitle: 'assets/images/new/catagories/CSR/CSR.png',
      img: 'assets/images/new/catagories/CSR/Character-BG-08.png',
      title: 'สร้างสรรค์สังคมที่ดี ด้วยการให้\n การแบ่งปัน การทำประโยชน์เพื่่อส่วนรวม',
      description: 'Learn to give, to share, to create \n the good society for alls',
      number: '2',
      name: 'CSR'
    },
    {
      imgTitle: 'assets/images/new/catagories/Shop Decoration/Shop-Decoration.png',
      img: 'assets/images/new/catagories/Shop Decoration/Character-BG-2-09.png',
      title: 'ออกแบบ และตกแต่งภายในอยางครบวงจร \n ด้วยดีไซน์เนอร์และทีมงานมืออาชีพ',
      description: 'All in one service for shop decoration ; \n design, build by professional team',
      number: '3',
      name: 'Shop Decoration'
    },
  ]

  tab5 = [
    {
      imgTitle: 'assets/images/new/catagories/Photo Booth Service/Photo-Booth-Service.png',
      img: 'assets/images/new/catagories/Photo Booth Service/Character-BG-10.png',
      title: 'เก็บทุกความทรงจำและความประทับใจใน \nรูปแบบที่สนุกยิ่งขึ้น โดยช่างภาพมืออาชีพ \nและเทคโนโลยีที่ทันสมัย',
      description: 'Keep the good memories & impression \n with more fun by the professional \n photographers and excellence\n photography technology',
      number: '1',
      name: 'Photo Booth Service'
    },
    {
      imgTitle: 'assets/images/new/catagories/Sport Marketing Activation/Sport-Marketing-Activation.png',
      img: 'assets/images/new/catagories/Sport Marketing Activation/Character-BG-3-01.png',
      title: 'มากกว่าการจัดแข่งกีฬา \n คือมหกรรมความสนุกและความบันเทิง \n สำหรับคนรักกีฬา',
      description: 'To create amazing activity in sports event ; more fun, more entertainment and more \n impress to sporty people',
      number: '2',
      name: 'Sport Marketing Activation'
    },
    {
      imgTitle: 'assets/images/new/catagories/Seminar & Workshop/Seminar-&-Workshop.png',
      img: 'assets/images/new/catagories/Seminar & Workshop/Character-BG-12.png',
      title: 'สัมมนา ฝึกอบรม เวิร์คช็อป \n และการประกวดต่างๆ',
      description: 'Professionally Seminar, Meeting, Workshop and Contest',
      number: '3',
      name: 'Seminar/Workshop/Contest'
    },
  ]

  blogCarouselOptions = {
    items: 3,
    margin: 30,
    nav: false,
    dots: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: false,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      576: {
        items: 2,
        margin: 10
      },
      991: {
        items: 3
      },
      1600: {
        items: 3
      }
    }
  }

  ngOnInit() {
  }

  open(val) {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg',
    windowClass: 'pui',
    centered: true
  });
    modalRef.componentInstance.lesson = val;
  }

}
