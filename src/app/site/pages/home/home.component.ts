import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected loggedIn: boolean = false;
  protected user!: User | null;
  protected status: string = 'Success';

  private userLoginSubscription!: Subscription;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.subscribeToLoginStatus();
    this.getUserDetails();
  }

  ngOnDestroy() {
    this.userLoginSubscription?.unsubscribe();
  }

  private subscribeToLoginStatus(): void {
    this.userLoginSubscription = this.authService.isLoggedIn.subscribe(signedIn => {
      // if(signedIn){
      //   console.log('User is logged in');
      // } else {
      //   console.log('User is not logged in')
      // }

      this.loggedIn = signedIn;
    });
  }

  private getUserDetails() {
    this.userService.getUserDetails().subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log('An error occured: ' + err);
      },
      complete: () => {
        console.log('The call has completed');
      }
    })
  }

}

