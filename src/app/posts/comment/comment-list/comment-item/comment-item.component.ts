import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../comment.model.';
import { CommentService } from '../../comment.service';
import { TokenService } from 'src/app/core/services/token.service';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  @Output() oldComment = new EventEmitter<Comment>();
  canDelete: boolean = false;
  constructor(
    private commentService: CommentService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.comment.user_id.toString() === this.tokenService.getId()) {
      this.canDelete = true;
    }
  }
  onDeleteComment() {
    this.commentService
      .deleteComment(this.comment.post_id, this.comment.id)
      .subscribe((response) => {
        this.oldComment.emit(response);
      });
  }
}
