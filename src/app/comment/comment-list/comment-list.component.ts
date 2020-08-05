import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { Post } from '../../posts/post.model';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  @Input() post_id: number;
  data;
  @Input() post: Post;
  @Input() comments: Comment[];
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.onGetComments();
  }
  onGetComments() {
    this.commentService.getComments(this.post_id).subscribe((comment) => {
      this.data = comment;
    });
  }
}
