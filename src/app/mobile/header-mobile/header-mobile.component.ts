import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  constructor(public userService: UserService) { }

  title = 'Hoohah App';

  ngOnInit(): void {
    this.userService.isLoggedIn();
  }

}
