import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { WebSocketService } from 'src/app/core/services/websocket.service';

import { TokenService } from 'src/app/core/services/token.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  data;
  subscription: Subscription;
  @Input() posts: Post[];

  index: number;
  constructor(
    private wsService: WebSocketService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.subscription = this.wsService.postDeleted.subscribe((e) => {
      if (e.user_id.toString() !== this.tokenService.getId()) {
        this.posts.splice(
          this.posts.findIndex((x) => {
            return e.id === x.id;
          }),
          1
        );
      }
    });
  }

  deletePost(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
  }
}
