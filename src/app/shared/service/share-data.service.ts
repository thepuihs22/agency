import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class SharedService {

  private message = new BehaviorSubject<any>(false);
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: any) {
    this.message.next(message)
  }

  getMenu() {
      return this.message;
  }
}