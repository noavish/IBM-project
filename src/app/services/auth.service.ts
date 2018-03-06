import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../models/userModel';
import {CanActivate, Router} from '@angular/router';
import {local} from 'd3-selection';

@Injectable()
export class AuthService {


  private user;

  constructor(private http: HttpClient, private router: Router) { }

  login(user): Observable<any> {
    return this.http.post<any>('login', user);
  }

  getUser() {
    return this.user;
  }

  newUser(user) {
   return this.http.post<User>('register', user);
  }

  getUserDetail() {
    this.http.get<any>('userdetails').subscribe(data => {
      this.user = data.user;
    },
      (err) => console.log(err),
      () => console.log(this.user)
      );
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('api/users');
  }

  isloggedIn() {
    if (localStorage.token) {
      return true;
    } else {
      return false;
    }
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
