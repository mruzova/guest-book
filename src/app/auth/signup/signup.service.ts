export interface SignupModel {
  avatar?: File;
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponse } from 'src/app/core/services/token.service';

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
    return this.http.post<AuthResponse>('/auth/register', formData);
  }
}
