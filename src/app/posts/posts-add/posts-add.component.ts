import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { DataStorage } from '../../shared/data-storage.service';
@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css'],
})
export class PostsAddComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private postsService: PostsService,
    private dataStorageService: DataStorage
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  onPost() {
    this.postsService.addPost(this.postForm.value);
    this.dataStorageService.storePosts();
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
