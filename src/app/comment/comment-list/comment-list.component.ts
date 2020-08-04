import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}
  onGetComments() {
    this.commentService.getComments(1).subscribe((res) => {
      console.log(res);
    });
  }
}
