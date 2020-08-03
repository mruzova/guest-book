import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post.model';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css'],
})
export class PostsItemComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit(): void {}
}
