import { Injectable } from '@angular/core';

export interface AuthResponse {
  token: { access_token: string; expires_at: Date };
}
@Injectable({ providedIn: 'root' })
export class TokenService {
  storeToken(response: AuthResponse) {
    localStorage.setItem('access_token', response.token.access_token);
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
}
