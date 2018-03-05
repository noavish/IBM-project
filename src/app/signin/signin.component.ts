import { Component, OnInit } from '@angular/core';
import { User } from '../userModel';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = new User();

  constructor(private AuthService : AuthService) { }

  ngOnInit() {
  }

  signup(){
    this.AuthService.addUser(this.user)
    .subscribe(data => {
console.log(data)
      this.user = data;
  })
  console.log(this.user);
};

//   addDog(){
//     this.dogService.addDog(this.dog)
//     .subscribe(data => {
//       this.dog = data;
//     })		
//     this.dogAdded.emit(this.dog);   
//   }
}
