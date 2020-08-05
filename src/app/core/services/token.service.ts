import { Injectable } from '@angular/core';

export interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
    avatar: File;
    is_admin: number;
  };
  token: { access_token: string; expires_at: Date };
}
@Injectable({ providedIn: 'root' })
export class TokenService {
  get hasToken() {
    return !!this.getToken();
  }

  storeToken(response: AuthResponse) {
    localStorage.setItem('access_token', response.token.access_token);
    localStorage.setItem('id', response.user.id.toString());
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  getId() {
    return localStorage.getItem('id');
  }
}
