import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PostsService {
  postsChanged = new Subject<Post[]>();
  posts: Post[];
  constructor(private http: HttpClient) {}
  storePost(title: string, message: string) {
    return this.http.post<Post>('/posts', {
      title: title,
      message: message,
    });
  }
  getPosts(page?: number) {
    if (page) {
      return this.http.get<Post[]>('/posts?page=' + page);
    } else {
      return this.http.get<Post[]>('/posts');
    }
  }
  deletePost(id: number) {
    return this.http.delete<Post>('/posts/' + id);
  }
  updatePost(id: number, title: string, message: string) {
    return this.http.put('/posts/' + id, { title: title, message: message });
  }
}
