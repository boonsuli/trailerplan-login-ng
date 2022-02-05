import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


const AUTH_API = 'http://localhost:8000/trailerplan/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signIn(username: string, encoded_password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      'username': username,
      'encoded_password': encoded_password
    }, httpOptions);
  }

  signUpAsGuest(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
    }, httpOptions);
  }

  signOut() {
  }

  refreshToken() {
  }
}
