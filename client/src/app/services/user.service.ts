import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfoUrl = "http://localhost:8080/api/users/"

  constructor(private http: HttpClient) { }

  getUserInfo(userId) {
    return this.http.get(this.getUserInfo + userId)
  }

}
