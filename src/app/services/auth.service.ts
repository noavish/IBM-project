import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User} from '../models/userModel';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthService {


  static getUser: any;
  private user;
  currentUser = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {
    this.currentUser.emit(this.user);
  }


  login(user): Observable<any> {
    return this.http.post<any>('login', user);
  }

  getUser() {
    return this.user;
  }

  newUser(user){
   this.http.post<User>('register', user,).subscribe();
  }

  getUserDetail() {
    this.http.get<any>('userdetails').subscribe(data => {
      this.user = data.user;
    },
      (err) => console.log(err),
      () => console.log(this.user)
      );
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>('userdetails');
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('api/users');
  }

  getAllLevels(): Observable<any[]> {
    return this.http.get<any[]>('api/levels');
  }

  getAllChannels(): Observable<any[]> {
    return this.http.get<any[]>('api/channels');
  }

  isloggedIn() {
    if (localStorage.token) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  changeUserDetails(user: User): Observable<any> {
    return this.http.put<any>(`api/changeDetails/${user.user_id}`, user);
  }

}
