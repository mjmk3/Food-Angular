import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
