import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

}
