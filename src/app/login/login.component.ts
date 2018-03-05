import { Component, OnInit } from '@angular/core';
import { User } from '../userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
  }


  log(){
    console.log(this.user.username, this.user.password);

  };














  // $("#btnLogin").click(function(event) {

  //   //Fetch form to apply custom Bootstrap validation
  //   var form = $("#formLogin")

  //   if (form[0].checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }
    
  //   form.addClass('was-validated');
  // });

}
