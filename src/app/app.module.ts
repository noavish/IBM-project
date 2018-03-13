import { WeatherService } from './services/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { SalesService } from './services/sales.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitAmountGraphComponent } from './Graphs/unit-amount-graph/unit-amount-graph.component';
import { AgmCoreModule } from '@agm/core';
import { MapWithPieComponent } from './Graphs/map-with-pie/map-with-pie.component';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { JwtModule } from '@auth0/angular-jwt';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TasksComponent } from './tasks/tasks.component';
import { WeatherSaleService } from './services/weather-sale.service';
import { WeatherSaleGraphComponent } from './Graphs/weather-sale-graph/weather-sale-graph.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskService } from './services/task.service';
import { UsMapComponent } from './Graphs/us-map/us-map.component';
import { AuthGuard } from './AuthGuard';
import { UserSalesComponent } from './user-sales/user-sales.component';
import { PiechartComponent } from './Graphs/piechart/piechart.component';
import { FacechartComponent } from './Graphs/facechart/facechart.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CommonModule } from '@angular/common';
import { UserSalesTableComponent } from './Graphs/user-sales-table/user-sales-table.component';
import { LogNewSaleComponent } from './log-new-sale/log-new-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NavbarComponent,
    UserPageComponent,
    MainComponent,
    AnalyticsComponent,
    WeatherComponent,
    UnitAmountGraphComponent,
    MapWithPieComponent,
    UsMapComponent,
    DashBoardComponent,
    TasksComponent,
    WeatherSaleGraphComponent,
    AddTaskComponent,
    UserSalesComponent,
    PiechartComponent,
    AddTaskComponent,
    FacechartComponent,
    TaskItemComponent,
    WeatherSaleGraphComponent,
    ManageUsersComponent,
    UserSalesTableComponent,
    LogNewSaleComponent

  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQdvgsGn1ZefzGQ8zS7W5Y4myZSlI4Vfk',
      // apiKey: 'AIzaSyDOVMcO9XGEh9iGT_16wp_s4swj575tj_Y',
      libraries: ['places'],
      language: 'en',
    }),
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    MaterializeModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AmChartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      }
    })
  ],
  providers: [AuthService, WeatherService, SalesService, AmChartsService, WeatherSaleService, TaskService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
