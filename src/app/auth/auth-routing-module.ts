import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { NgModule } from '@angular/core';
const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
