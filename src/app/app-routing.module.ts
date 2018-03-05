import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SigninComponent } from './signin/signin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WeatherComponent } from './weather/weather.component';
import {UnitAmountGraphComponent} from './unit-amount-graph/unit-amount-graph.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './AuthGuard';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'weather', component: WeatherComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'analytics', canActivate : [AuthGuard], component: AnalyticsComponent },
  { path: 'user', canActivate : [AuthGuard], component: UserPageComponent },
  { path: 'amount', component: UnitAmountGraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
