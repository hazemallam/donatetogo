import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {DonationsComponent} from './views/donations/donations.component';
import {SubscriptionsComponent} from './views/subscriptions/subscriptions.component';
import {CardsComponent} from './views/cards/cards.component';
import {ProfileComponent} from './views/profile/profile.component';



const routes: Routes = [
  {path:'', component:DashboardComponent, pathMatch: 'full'},
  {path: 'donations', component: DonationsComponent, pathMatch: 'full'},
  {path: 'subscriptions', component: SubscriptionsComponent, pathMatch: 'full'},
  {path: 'cards', component: CardsComponent, pathMatch:'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
