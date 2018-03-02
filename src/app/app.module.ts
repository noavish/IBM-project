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
import { SalesService } from './sales.service';
import { FormsModule } from '@angular/forms';
import { UnitAmountGraphComponent } from './unit-amount-graph/unit-amount-graph.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NavbarComponent,
    UserPageComponent,
    MainComponent,
    AnalyticsComponent,
    UnitAmountGraphComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService, SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
