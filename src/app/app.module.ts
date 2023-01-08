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
import { RegisterComponent } from './access/register/register.component';
import { LoginComponent } from './access/login/login.component';
import { CheckoutComponent } from './payment/checkout/checkout.component';
import { TransferComponent } from './payment/transfer/transfer.component';
import { RechargeComponent } from './payment/recharge/recharge.component';
import { WalletComponent } from './payment/wallet/wallet.component';
import { CardComponent } from './payment/card/card.component';

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
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    CheckoutComponent,
    TransferComponent,
    RechargeComponent,
    WalletComponent,
    CardComponent
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
