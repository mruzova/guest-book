import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { TokenService } from 'src/app/core/services/token.service';
@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css'],
})
export class CommentAddComponent implements OnInit {
  @Input() id: number;
  @Input() user_id: number;
  commentForm: FormGroup;
  // canComment: boolean = false;

  constructor(
    private commentService: CommentService,
    public tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  onComment() {
    this.commentService
      .storeComment(this.commentForm.value.message, this.id)
      .subscribe((response) => console.log(response));
  }
  private initForm() {
    this.commentForm = new FormGroup({
      message: new FormControl(null, Validators.required),
    });
  }
}
