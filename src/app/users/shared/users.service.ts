import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private url: string = "/api/users";

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.url, this.jwt())
      .map(res => res.json());
  }

  getUser(id){
    return this.http.get(this.getUserUrl(id), this.jwt())
      .map(res => res.json());
  }

  addUser(user){
    return this.http.post(this.url, JSON.stringify(user), this.jwt())
      .map(res => res.json());
  }

  updateUser(user){
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user), this.jwt())
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.getUserUrl(id), this.jwt())
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }

  // json web token
  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
