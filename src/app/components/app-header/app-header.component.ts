import {Component, Input, OnDestroy} from '@angular/core';
import NavRoute from "../../shared/interfaces/nav-route.interface";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnDestroy{

  @Input() navRoutes: NavRoute[] = [];
  @Input() title?: string;

  activeRouteUrl = '';
  end$ = new Subject<void>();
  constructor(private readonly router: Router) {
    this.initActiveRouteSubscription();
  }

  ngOnDestroy() {
    this.end$.next();
    this.end$.complete();
  }

  private initActiveRouteSubscription() {
    this.router.events.pipe(takeUntil(this.end$)).subscribe((e: any) => {
      if (e.type === 1) {
        this.activeRouteUrl = e.url.substring(1);
      }
    });
  }
}
