export interface LoginModel {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: { access_token: string; expires_at: Date };
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.http.post<LoginResponse>('/auth/login', {
      email: loginModel.email,
      password: loginModel.password,
    });
  }
}
