import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  password: string;
  username: string;
  returnUrl: string;

  constructor(private authService: AuthService, private zone: NgZone,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


    login() {
    const user = {username: this.username, password: this.password};
    this.authService.login(user).subscribe(res => {
      localStorage.setItem('token', res.token);
    },
      (err) => console.log(err),
      () => {
        this.authService.getUserDetail();
        this.router.navigateByUrl(this.returnUrl);
      }
      );

    }
}
