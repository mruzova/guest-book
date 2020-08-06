import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor() {}

  ngOnInit(): void {}
}
