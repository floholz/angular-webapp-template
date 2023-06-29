import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: ''}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
