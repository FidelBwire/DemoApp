import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetails = new BehaviorSubject<User | null>(null);

  constructor() {
    this.userDetails.next(
      {
        id: 'user_001',
        name: 'John Doe',
        age: 25,
        favorites: [
          {
            productName: 'Tecno',
            productId: 1,
            selectedOn: new Date(),
            ordered: false,
          },
          {
            productName: 'Samsung',
            productId: 2,
            ordered: true
          }
        ]
      }
    )
   }

  getUserDetails(): Observable<User | null> {
    return this.userDetails.asObservable();
  }

}
