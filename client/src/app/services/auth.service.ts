import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encrypt } from '../utils/crypto'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl = 'http://localhost:8080/auth/login';

  token: string;
  userId: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId');
  }

  login(email, password) {
    const encryptedPassword = encrypt({ password });
    const data = { ...encryptedPassword, email };
    
    return this.http
      .post(this.loginUrl, data).toPromise()
      .then(response => {
        localStorage.setItem("token", response['token']);
        localStorage.setItem("userId", response['userId']);

        this.token = response['token'];
        this.userId = response['userId'];
      })
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    this.token = null;
    this.userId = null;
  }

  isLoggedIn(): boolean {
    return (this.token && this.userId) ? true : false
  }
}
