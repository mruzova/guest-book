export interface LoginModel {
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponse } from '../../core/services/token.service';
@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.http.post<AuthResponse>('/auth/login', {
      email: loginModel.email,
      password: loginModel.password,
    });
  }
}
