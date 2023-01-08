import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { RatingModule } from 'ng-starrating';
import { CartComponent } from './layout/cart/cart.component';
import { TitleComponent } from './layout/title/title.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { SearchComponent } from './layout/search/search.component';
import { TagsComponent } from './layout/tags/tags.component';
import { FoodComponent } from './layout/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodComponent,
    CartComponent,
    TitleComponent,
    NotFoundComponent
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
