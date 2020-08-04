export interface LoginModel {
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../../core/services/token.service';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class LoginService {
  isLogin: boolean;
  constructor(private http: HttpClient, private router: Router) {}

  login(loginModel: LoginModel) {
    return this.http.post<AuthResponse>('/auth/login', {
      email: loginModel.email,
      password: loginModel.password,
    });
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id');
    this.router.navigate(['/auth']);
  }
}
