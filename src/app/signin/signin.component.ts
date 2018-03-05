import { Component, OnInit } from '@angular/core';
import { User } from '../models/userModel';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.authService.addUser(this.user)
    .subscribe(data => {
      console.log(data);
      this.user = data;
  });
  console.log(this.user);
}

}
