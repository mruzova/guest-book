import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService, LoginModel } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = null;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const email = this.loginForm.value.email;

    const password = this.loginForm.value.password;

    let loginModel: LoginModel = {
      email: email,

      password: password,
    };

    this.loginService.login(loginModel).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('access_token', response.token.access_token);
      },
      (error) => {
        console.log(error);
        this.error = 'the password or email are invalid';
        this.loginForm.get('password').reset();
      }
    );
  }
  onHandleError() {
    this.error = null;
  }
}
