import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  data;
  pages: number[] = [];
  currentPage: number = 1;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.onGetPosts();
  }

  newPost(post) {
    this.posts.unshift(post);
  }
  onGetPosts(page?: number) {
    this.currentPage = page;
    this.postsService.getPosts(page).subscribe((res) => {
      this.data = res;
      this.posts = this.data.data;
      this.pages.length = this.data.meta.last_page;
    });
  }
}
