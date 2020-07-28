export interface SignupModel {
  avatar?: File;
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private http: HttpClient) {}

  signup(signupModel: SignupModel) {
    // const HttpUploadOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
    // };
    // const formData = new FormData();
    // formData.append('avatar', signupModel.avatar);
    // formData.append('email', signupModel.email);
    // formData.append('name', signupModel.name);
    // formData.append('password', signupModel.password);
    return this.http.post(
      'https://guest-book.naveksoft.com/api/v1/auth/register',
      {
        // avatar: signupModel.avatar,
        email: signupModel.email,
        name: signupModel.name,
        password: signupModel.password,
        password_confirmation: signupModel.password_confirmation,
      }
    );
  }
}
