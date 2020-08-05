import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from './comment.model.';
@Injectable({ providedIn: 'root' })
export class CommentService {
  constructor(private http: HttpClient) {}

  storeComment(message: string, id: number) {
    return this.http.post('/posts/' + id + '/answers', {
      message: message,
    });
  }
  getComments(id: number) {
    return this.http.get<Comment[]>('/posts/' + id + '/answers');
  }
}
