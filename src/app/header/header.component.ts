import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Hookah App';

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.isLoggedIn();
  }

}
