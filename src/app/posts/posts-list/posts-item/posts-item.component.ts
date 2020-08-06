import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post.model';
import { CommentService } from 'src/app/comment/comment.service';
import { TokenService } from 'src/app/core/services/token.service';
import { PostsService } from '../../posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css'],
})
export class PostsItemComponent implements OnInit {
  canComment: boolean = false;
  @Input() post: Post;
  @Input() index: number;

  constructor(
    private tokenService: TokenService,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    if (this.post.user_id.toString() === this.tokenService.getId()) {
      this.canComment = true;
    }
  }
  onDeletePost() {
    this.postService.deletePost(this.post.id).subscribe((response) => {
      console.log(response);
      this.canComment = true;
    });
  }
  onUpdatePost() {
    this.postService
      .updatePost(this.post.id, this.post.title, this.post.message)
      .subscribe((response) => {
        console.log(response);
        this.canComment = true;
      });
  }
}
