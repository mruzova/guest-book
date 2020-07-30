import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PostsService {
  postsChanged = new Subject<Post[]>();
  private posts: Post[] = [];
  addPost(post: Post) {
    this.posts.push(post);
    this.postsChanged.next(this.posts.slice());
  }
  getPosts() {
    return this.posts.slice();
  }
}
