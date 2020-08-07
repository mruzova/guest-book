import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../post.model';

import { TokenService } from 'src/app/core/services/token.service';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css'],
})
export class PostsItemComponent implements OnInit {
  canComment: boolean = false;
  comments: Comment[];
  @Input() post: Post;
  @Input() index: number;
  @Output() oldPost = new EventEmitter<Post>();
  message: string;
  title: string;
  constructor(
    private tokenService: TokenService,
    private postService: PostsService
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
      console.log(response);
      this.canComment = true;
      this.oldPost.emit(response);
    });
  }
  onUpdatePost() {
    this.postService
      .updatePost(this.post.id, this.title, this.message)
      .subscribe((response) => {
        console.log(response);
        this.canComment = true;
      });
  }
}
