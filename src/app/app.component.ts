import { Component } from '@angular/core';
import { ApplicationStateService } from "./_services/application-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public applicationStateService: ApplicationStateService){}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {}

}
