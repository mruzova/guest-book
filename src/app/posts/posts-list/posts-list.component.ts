import { Component, OnInit, Input } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  data;
  @Input() posts: Post[];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
