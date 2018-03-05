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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UnitAmountGraphComponent } from './unit-amount-graph/unit-amount-graph.component';
import { AgmCoreModule } from '@agm/core';
import { MapWithPieComponent } from './map-with-pie/map-with-pie.component';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { JwtModule } from '@auth0/angular-jwt';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component'
import { TaskService } from './services/task.service';


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
    DashBoardComponent,
    TasksComponent,
    AddTaskComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQdvgsGn1ZefzGQ8zS7W5Y4myZSlI4Vfk',
      // apiKey: 'AIzaSyDOVMcO9XGEh9iGT_16wp_s4swj575tj_Y',
      libraries: ['places']
    }),
    BrowserModule,
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
  providers: [AuthService, WeatherService, SalesService, AmChartsService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
