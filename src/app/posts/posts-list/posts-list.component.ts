import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

import { PostsService } from '../posts.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  data;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.onGetPosts();
  }
  onGetPosts() {
    this.postsService.getPosts().subscribe((res) => (this.data = res));
  }
}
