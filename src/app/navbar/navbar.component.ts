import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { User } from '../models/userModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: User[];
  user: any;
  levels: any[];
  channels: any[];
  chosenLevel: string;
  chosenChannel: number;
  newUser: User = new User();

  constructor( private authService: AuthService, private router: Router ) { }
  manageUserClicked = new EventEmitter<string|MaterializeAction>();

  getUser() {
    this.authService.getCurrentUser().subscribe(data => {
      this.user = data.user;
    });
  }

  ngOnInit() {
    this.getUser();
  }

  getUsers() {
    this.authService.getAllUsers().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
  }

  getLevels() {
    this.authService.getAllLevels().subscribe(
      data => this.levels = data,
      error => console.log(error)
    );
  }

  getChannels() {
    this.authService.getAllChannels().subscribe(
      data => this.channels = data,
      error => console.log(error)
    );
  }

  logOut() {
    this.authService.logOut();
  }

  openManageUsers() {
    this.manageUserClicked.emit({action: 'modal', params: ['open']});
    this.getUsers();
    this.getLevels();
    this.getChannels();
  }

  closeManageUsers() {
    this.manageUserClicked.emit({action: 'modal', params: ['close']});
  }

  submitChanges() {
    this.newUser.level = this.chosenLevel;
    this.newUser.channel_id_fk = this.chosenChannel;
    this.authService.changeUserDetails(this.newUser).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
