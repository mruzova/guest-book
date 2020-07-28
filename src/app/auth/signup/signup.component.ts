import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { SignupService, SignupModel } from './signup.service';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  signupForm: FormGroup;

  constructor(private signupService: SignupService) {}

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
  }
  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    // const avatar = this.signupForm.value.avatar;
    const email = this.signupForm.value.email;
    const name = this.signupForm.value.name;
    const password = this.signupForm.value.password;
    const password_confirmation = this.signupForm.value.password_confirmation;
    let signupModel: SignupModel = {
      //  avatar: avatar,
      email: email,
      name: name,
      password: password,
      password_confirmation: password_confirmation,
    };

    this.signupService.signup(signupModel).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.signupForm);
  }
  private initForm() {
    this.signupForm = new FormGroup(
      {
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
        //avatar: new FormControl(null),
      },
      { validators: this.confirmPassword.bind(this) }
      // { validator: this.MustMatch('password', 'password_confirmation') }
    );
  }
  get f() {
    return this.signupForm.controls;
  }
  // MustMatch(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //     // set error on matchingControl if validation fails
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ mustMatch: true });
  //       return { mustMatch: true };
  //     } else {
  //       matchingControl.setErrors(null);
  //       return null;
  //     }
  //   };
  // }
  confirmPassword(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('password_confirmation');

    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}
