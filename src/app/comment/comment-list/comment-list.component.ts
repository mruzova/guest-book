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
  error: string = null;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    //this.onGetComments();
  }
  onGetComments() {
    this.commentService.getComments(this.post_id).subscribe((comment) => {
      this.data = comment;

      if (this.data.data.length === 0) {
        this.error = 'there are no comments under this post yet';
      }
    });
  }
}
