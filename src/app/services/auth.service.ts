import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../models/userModel';

@Injectable()
export class AuthService {
  private user;

  constructor(private http: HttpClient) { }

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
      );
  }
}
