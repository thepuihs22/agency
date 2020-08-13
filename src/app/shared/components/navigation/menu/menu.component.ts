import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Menu, NavService } from '../../../service/nav.service';
import { SharedService } from '../../../../shared/service/share-data.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  toggle: boolean;
  @Output() nameEvent = new EventEmitter<string>();
  public menuItems: Menu[];
  public openSide = false;
  openSideA = false;
  testtest = false;
  public activeItem = 'home';
  public active = false;
  public activeChildItem = '';
  public overlay = false;
  isMobile: boolean;
  constructor( public navServices: NavService,
    private sharedService: SharedService,
    public breakpointObserver: BreakpointObserver,
    private vps: ViewportScroller) {
      this.toggle = true;
    }

  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems
    });
     this.sharedService.getMenu().subscribe(response => {
      this.toggle = response;
    });

    this.breakpointObserver.observe(['(max-width: 991px)']).subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;
      console.log(' ++++ this.isMobile');
      console.log(this.isMobile);
    });
  }

  toggleSidebar(){
    this.openSide = !this.openSide;
  }

  toggleSidebarA() {
    this.openSideA = !this.openSideA
  }

  closeOverlay(){
    this.openSide = false
  }

  setActive(menuItem){
    if (this.activeItem === menuItem) {
      this.activeItem = ''
    } else {
      this.activeItem = menuItem
    }
  }

  isActive(item){
    return this.activeItem === item;
  }

  // For Active Child Menu in Mobile View
  setChildActive(subMenu){
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = ''
    } else {
      this.activeChildItem = subMenu
    }
  }

  ischildActive(subMenu){
    return this.activeChildItem === subMenu;
  }

  scroll(id) {
    this.vps.scrollToAnchor(id);
    this.nameEvent.emit(id);
  }

  scrollback() {
    this.vps.scrollToPosition([0, 0]);
  }

}
