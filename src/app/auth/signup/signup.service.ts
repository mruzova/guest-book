export interface SignupModel {
  avatar?: File;
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
}
export interface SignupResponse {
  token: { access_token: string; expires_at: Date };
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}

  signup(signupModel: SignupModel, fileToUpload: File) {
    const formData = new FormData();
    if (fileToUpload) {
      formData.append('avatar', fileToUpload, fileToUpload.name);
    }

    formData.append('email', signupModel.email);
    formData.append('name', signupModel.name);
    formData.append('password', signupModel.password);
    formData.append('password_confirmation', signupModel.password_confirmation);
    return this.http
      .post<SignupResponse>('/auth/register', formData)
      .pipe(
        tap((response) =>
          localStorage.setItem('access_token', response.token.access_token)
        )
      );
  }
}
