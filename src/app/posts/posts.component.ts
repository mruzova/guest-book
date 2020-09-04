import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { WebSocketService } from '../core/services/websocket.service';
import { Subscription } from 'rxjs';
import { TokenService } from '../core/services/token.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  data;
  pages: number[] = [];
  currentPage: number = 1;
  subscription: Subscription;
  subscription1: Subscription;

  constructor(
    private postsService: PostsService,
    private wsService: WebSocketService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.onGetPosts();
    this.subscription = this.wsService.postAdded.subscribe((e) => {
      if (e.user_id.toString() !== this.tokenService.getId()) {
        this.posts.unshift(e);
      }
    });
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
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
