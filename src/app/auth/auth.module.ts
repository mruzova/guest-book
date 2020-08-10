import { NgModule } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { AlertComponent } from '../alert/alert.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth/auth-routing-module';
@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
  ],
  exports: [
    AuthComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
  ],
})
export class AuthModule {}
