import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../comment.model.';
import { CommentService } from '../../comment.service';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}
}
