import { Component } from '@angular/core';
import NavRoute from "./shared/interfaces/nav-route.interface";
import {DataService} from "./shared/services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navRoutes: NavRoute[] = [
    {name: 'Home', path: '', icon: 'matHome'},
    {name: 'About', path: 'about', icon: 'simpleAngularjs'},
  ];

  constructor(private readonly dataService: DataService) {
    this.initDataSubscription();
  }

  private initDataSubscription() {
    this.dataService.initData();
  }
}
