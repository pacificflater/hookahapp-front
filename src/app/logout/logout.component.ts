import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: UserService,
              private router: Router) {
  }

  logout() {
    this.authService.logout();
    console.log('User is logged out:');
    this.router.navigateByUrl('/login');


  }
}
