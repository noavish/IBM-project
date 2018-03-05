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
import {DashBoardComponent} from './dash-board/dash-board.component';
import {TasksComponent} from './tasks/tasks.component';
import { WeatherSaleGraphComponent } from './weather-sale-graph/weather-sale-graph.component'


const routes: Routes = [
  //need change root route 
  { path: '', component: WeatherSaleGraphComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'amount', component: UnitAmountGraphComponent },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
