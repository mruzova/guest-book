import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PostsService {
  postsChanged = new Subject<Post[]>();
  private posts: Post[] = [];

  constructor(private http: HttpClient) {}
  storePost(title: string, message: string) {
    this.http
      .post('/posts', {
        title: title,
        message: message,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
  getPosts() {
    return this.http.get<Post[]>('/posts');
  }
  deletePost(id: number) {
    return this.http.delete('/posts/' + id);
  }
  updatePost(id: number, title: string, message: string) {
    return this.http.put('/posts/' + id, { title: title, message: message });
  }
}
