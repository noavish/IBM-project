import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // $("#btnLogin").click(function(event) {

  //   //Fetch form to apply custom Bootstrap validation
  //   var form = $("#formLogin")

  //   if (form[0].checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }

  //   form.addClass('was-validated');
  // });

    login() {
    const user = {username: this.username, password: this.password};
    this.authService.login(user).subscribe(res => {
      localStorage.setItem('token', res.token);
    });

    }
}
