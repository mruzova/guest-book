import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  @Input() post_id: number;
  data;
  @Input() comments: Comment[];
  error: string = null;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  deleteComment(index: number) {
    this.comments.splice(index, 1);
  }
}
