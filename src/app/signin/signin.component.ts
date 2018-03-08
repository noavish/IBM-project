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

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  newUser() {
    console.log(this.user);
    this.authService.newUser(this.user);
    this.router.navigate(['/'])

}
}
