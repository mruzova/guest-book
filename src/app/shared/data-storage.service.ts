import { Injectable } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class DataStorage {
  constructor(private postsService: PostsService, private http: HttpClient) {}
  storePosts() {
    const posts = this.postsService.getPosts();
    this.http.post('/posts', posts).subscribe((response) => {
      console.log(response);
    });
  }
}
