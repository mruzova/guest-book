import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsItemComponent } from './posts/posts-list/posts-item/posts-item.component';
import { PostsAddComponent } from './posts/posts-add/posts-add.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';

import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentItemComponent } from './comment/comment-list/comment-item/comment-item.component';

import { CommentAddComponent } from './comment/comment-add/comment-add.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    PostsComponent,
    PostsListComponent,
    PostsItemComponent,
    PostsAddComponent,

    CommentListComponent,
    CommentItemComponent,
    CommentAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
