import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

  getUserDetail() {
    this.http.get<any>('userdetails').subscribe(data => {
      this.user = data.user;
    },
      (err) => console.log(err),
      () => console.log(this.user)
      );
  }
}
