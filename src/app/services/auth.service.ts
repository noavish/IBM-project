import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './userModel';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {
    this.http.post('login', user);
  }

  addUser(newUser: User): Observable<User> {
    return this.http.post<User>('signin', { user: newUser });
  }
}
