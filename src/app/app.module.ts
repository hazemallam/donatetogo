import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DonationsComponent } from './views/donations/donations.component';
import { SubscriptionsComponent } from './views/subscriptions/subscriptions.component';
import { CardsComponent } from './views/cards/cards.component';
import { ProfileComponent } from './views/profile/profile.component';
import {ChartsModule} from 'ng2-charts';
import { BanksComponent } from './views/banks/banks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DonationsComponent,
    SubscriptionsComponent,
    CardsComponent,
    ProfileComponent,
    BanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
