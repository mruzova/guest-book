import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [
    new Post('test title', 'test message'),
    new Post('test2', 'test2message'),
  ];
  data;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.onGetPosts();
  }
  onGetPosts() {
    this.postsService.getPosts().subscribe((res) => (this.data = res));
  }
}
