import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements   OnInit {
  title = 'IBM-Project';


  user: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (localStorage.token) {
    this.authService.getCurrentUser().subscribe(data => {
      this.user = data.user;
    });
    }
  }
}

