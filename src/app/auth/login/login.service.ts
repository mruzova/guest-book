export interface LoginModel {
  email: string;
  password: string;
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.http.post('/auth/login', {
      email: loginModel.email,
      password: loginModel.password,
    });
  }
}
