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

  addUser(newUser: User) : Observable<User>{
    return this.http.post<User>('signin', { user: newUser });
  }
}
//   addUser(user){
//     console.log(user);
//     this.http.post('/signin', function(req, res)
//     newUser: User = new User(req.body);
//     newUser.save(function(err, data) {
//     if (err) throw err;
//     res.send(data);
//   })
// });


// app.post('/posts', function (req, res) {
//   var newobj = new Post(req.body);
//   newobj.save(function(err, data) {
//     if (err) throw err;
//     res.send(data);
//   })
// });