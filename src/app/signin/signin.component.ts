import {Component, NgZone, OnInit} from '@angular/core';
import { User } from '../models/userModel';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService, private zone: NgZone) { }

  ngOnInit() {
  }

  newUser() {
    console.log(this.user);
    this.authService.newUser(this.user).subscribe(data => {
      this.zone.runOutsideAngular(() => {
        window.location.href = '/';
      });
    });
  }

}
