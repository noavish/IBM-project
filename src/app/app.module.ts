import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NavbarComponent,
    UserPageComponent,
    MainComponent,
    AnalyticsComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AuthService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
