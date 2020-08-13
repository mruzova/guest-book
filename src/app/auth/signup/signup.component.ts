import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { SignupService, SignupModel } from './signup.service';
import { CustomValidators } from 'ngx-custom-validators';

import { TokenService } from 'src/app/core/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public imagePath;
  fileToUpload: File = null;
  imgURL: any;
  public message: string;
  signupForm: FormGroup;
  error: string = null;
  constructor(
    private signupService: SignupService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  preview(files) {
    if (files.length === 0) return;

    var type = files[0].type;
    if (type.match(/image\/*/) == null) {
      this.message = 'only images are allowed';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
    this.fileToUpload = files.item(0);
  }
  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const avatar = this.signupForm.value.avatar;
    const email = this.signupForm.value.email;
    const name = this.signupForm.value.name;
    const password = this.signupForm.value.password;
    const password_confirmation = this.signupForm.value.password_confirmation;
    let signupModel: SignupModel = {
      avatar: avatar,
      email: email,
      name: name,
      password: password,
      password_confirmation: password_confirmation,
    };

    this.signupService.signup(signupModel, this.fileToUpload).subscribe(
      (response) => {
        this.tokenService.storeToken(response);
        this.router.navigate(['../posts']);
      },
      (error) => {
        this.error = 'user with this email is already signed up';
        this.signupForm.get('email').reset();
      }
    );
  }
  private initForm() {
    this.signupForm = new FormGroup(
      {
        avatar: new FormControl(null),
        email: new FormControl(null, [
          Validators.email,
          Validators.required,
          Validators.maxLength(255),
        ]),
        name: new FormControl(null, [
          Validators.required,
          Validators.maxLength(255),
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ]),
        password_confirmation: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ]),
      },
      { validators: this.confirmPassword.bind(this) }
    );
  }
  get f() {
    return this.signupForm.controls;
  }

  confirmPassword(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('password_confirmation');

    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  onHandleError() {
    this.error = null;
  }
}
