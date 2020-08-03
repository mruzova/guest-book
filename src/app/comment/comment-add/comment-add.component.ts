import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css'],
})
export class CommentAddComponent implements OnInit {
  commentForm: FormGroup;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.initForm();
  }
  onComment() {
    this.commentService.storeComment(this.commentForm.value.message);
  }
  private initForm() {
    this.commentForm = new FormGroup({
      message: new FormControl(null, Validators.required),
    });
  }
}
