import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { RatingModule } from 'ng-starrating';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
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
    AppRoutingModule,
    FormsModule,
    RouterLink,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
