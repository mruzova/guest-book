import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
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
}
