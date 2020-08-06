import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  data;
  posts: Post[];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.onGetPosts();
  }
  onGetPosts() {
    this.postsService.getPosts().subscribe((res) => {
      this.data = res;
    });
  }
}
