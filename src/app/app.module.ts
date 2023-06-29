import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormControlPipe } from './shared/pipes/form-control.pipe';
import {MatButtonModule} from "@angular/material/button";
import { FormControlNamePipe } from './shared/pipes/form-control-name.pipe';
import {MatInputModule} from "@angular/material/input";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {ApiModule} from "./api/api.module";
import { environment } from '../environments/environment';
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgIconsModule} from '@ng-icons/core';
import {simpleAngularjs} from '@ng-icons/simple-icons';
import {matAccountCircle, matHome, matNotifications, matPerson, matSettings} from "@ng-icons/material-icons/baseline";
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    FormControlPipe,
    FormControlNamePipe,
    AppHeaderComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    ApiModule.forRoot({rootUrl: environment.apiUrl}),
    NgIconsModule.withIcons({
      simpleAngularjs, matAccountCircle, matPerson, matHome, matSettings, matNotifications
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    CdkDrag,
    MatMenuModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
