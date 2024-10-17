import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  signin() {
    this.isLoggedIn.next(true);
  }

  signout() {
    this.isLoggedIn.next(false);
  }
}
