import { Component } from '@angular/core';
import {UserService} from "./_services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hoohah App';

  activeId: number;

  constructor(public userService: UserService){}

  ngOnInit(): void {
    this.userService.isLoggedIn()
  }

}
