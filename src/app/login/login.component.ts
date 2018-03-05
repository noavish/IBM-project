import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  password: string;
  username: string;

  constructor(private authService: AuthService, private zone: NgZone) { }

  ngOnInit() {
  }


    login() {
    const user = {username: this.username, password: this.password};
    this.authService.login(user).subscribe(res => {
      localStorage.setItem('token', res.token);
    },
      (err) => console.log(err),
      () => this.zone.runOutsideAngular(() => {
        window.location.href = '/';
      })
      );

    }
}
