import { NgModule } from '@angular/core';

import { PostsComponent } from '../posts/posts.component';
import { PostsListComponent } from '../posts/posts-list/posts-list.component';
import { PostsItemComponent } from '../posts/posts-list/posts-item/posts-item.component';
import { PostsAddComponent } from '../posts/posts-add/posts-add.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentItemComponent } from './comment/comment-list/comment-item/comment-item.component';
import { CommentAddComponent } from './comment/comment-add/comment-add.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostsItemComponent,
    PostsAddComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentAddComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PostsRoutingModule],
  exports: [
    PostsComponent,
    PostsListComponent,
    PostsItemComponent,
    PostsAddComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentAddComponent,
  ],
})
export class PostsModule {}
