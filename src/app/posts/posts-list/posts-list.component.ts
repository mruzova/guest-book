import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [new Post('test title', 'test message')];
  constructor() {}

  ngOnInit(): void {}
}
