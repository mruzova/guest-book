import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css'],
})
export class PostsAddComponent implements OnInit {
  postForm: FormGroup;
  @Output() newPost = new EventEmitter<Post>();
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.initForm();
  }
  onPost() {
    this.postsService
      .storePost(this.postForm.value.title, this.postForm.value.message)
      .subscribe((response) => {
        this.newPost.emit(response);
      });
    this.onClear();
  }

  private initForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(255),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(65535),
      ]),
    });
  }
  onClear() {
    this.postForm.reset();
  }
}
