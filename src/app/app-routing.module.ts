import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SigninComponent } from './signin/signin.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherSaleGraphComponent } from './Graphs/weather-sale-graph/weather-sale-graph.component';
import { UnitAmountGraphComponent } from './Graphs/unit-amount-graph/unit-amount-graph.component';
import { UsMapComponent } from './Graphs/us-map/us-map.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './AuthGuard';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserSalesComponent } from './user-sales/user-sales.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { PiechartComponent } from './Graphs/piechart/piechart.component';
import { FacechartComponent } from './Graphs/facechart/facechart.component';
import { UserSalesTableComponent } from './Graphs/user-sales-table/user-sales-table.component';

const routes: Routes = [
  //need change root route
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'amount', component: UnitAmountGraphComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'analytics', canActivate : [AuthGuard], component: AnalyticsComponent },
  { path: 'user', canActivate : [AuthGuard], component: UserPageComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashBoardComponent },
  { path: 'tasks', canActivate : [AuthGuard], component: TasksComponent },
  { path: 'pie',component:PiechartComponent },
  { path: 'face', component: FacechartComponent },
  { path: 'weathersale', component: WeatherSaleGraphComponent },
  { path: 'sh', component: FacechartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
