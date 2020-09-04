import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../post.model';

import { TokenService } from 'src/app/core/services/token.service';
import { PostsService } from '../../posts.service';
import { CommentService } from '../../comment/comment.service';
import { Subscription } from 'rxjs';
import { WebSocketService } from 'src/app/core/services/websocket.service';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css'],
})
export class PostsItemComponent implements OnInit {
  canComment: boolean = false;
  comments: Comment[];
  showNext: boolean = false;

  showPrev: boolean = false;

  data;
  error: string = null;
  @Input() post: Post;
  @Input() index: number;
  @Output() oldPost = new EventEmitter<Post>();
  subscription: Subscription;
  message: string;
  title: string;
  constructor(
    private tokenService: TokenService,
    private postService: PostsService,
    private commentService: CommentService,
    private wsService: WebSocketService
  ) {}

  ngOnInit(): void {
    if (this.post.user_id.toString() === this.tokenService.getId()) {
      this.canComment = true;
    }
    this.message = this.post.message;
    this.title = this.post.title;
  }
  onDeletePost() {
    this.postService.deletePost(this.post.id).subscribe((response) => {
      this.canComment = true;
      this.oldPost.emit(response);
    });
  }
  onUpdatePost() {
    this.postService
      .updatePost(this.post.id, this.title, this.message)
      .subscribe((response) => {
        this.canComment = true;
      });
  }
  onGetComments() {
    this.commentService.getComments(this.post.id).subscribe((comment) => {
      this.data = comment;
      this.comments = this.data.data;
      this.comments.reverse();
      if (this.data.data.length === 0) {
        this.error = 'there are no comments under this post yet';
      }
      if (this.data.links.next !== null) {
        this.showNext = true;
      }
    });
  }
  newComment(comment) {
    if (typeof this.comments !== 'undefined') {
      this.comments.unshift(comment);
    }
  }
  onShowNext() {
    this.commentService
      .getMoreComments(this.post.id, this.data.meta.current_page + 1)
      .subscribe((comment) => {
        this.data = comment;
        this.comments = this.data.data;
        this.comments.reverse();
        if (this.data.links.next === null) {
          this.showNext = false;
        }
        if (this.data.links.prev !== null) {
          this.showPrev = true;
        }
      });
  }
  onShowPrev() {
    this.commentService
      .getMoreComments(this.post.id, this.data.meta.current_page - 1)
      .subscribe((comment) => {
        this.data = comment;
        this.comments = this.data.data;
        this.comments.reverse();
        if (this.data.links.prev === null) {
          this.showPrev = false;
        }
        if (this.data.links.next !== null) {
          this.showNext = true;
        }
      });
  }
}
