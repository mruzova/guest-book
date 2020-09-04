import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import { TokenService } from './token.service';
import { PostsService } from 'src/app/posts/posts.service';
import { Subject } from 'rxjs';
import { Post } from '../../posts/post.model';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  echo;
  postAdded = new Subject<Post>();
  postDeleted = new Subject<Post>();

  constructor(
    private tokenService: TokenService,
    private postsService: PostsService
  ) {
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'key',
      wsHost: 'guest-book.naveksoft.com',
      wsPort: '443',
      wssPort: '443',
      wsPath: '/ws',
      encrypted: true,
      authEndpoint: 'https://guest-book.naveksoft.com/broadcasting/auth',
      auth: {
        headers: {
          Authorization: `Bearer ` + this.tokenService.getToken(),
          Accept: `application/json`,
        },
      },
      enabledTransports: ['ws', 'wss'], // https://github.com/beyondcode/laravel-websockets/issues/86
      disableStats: true,
    });

    this.echo.channel('posts').listen('PublicPush', (e) => {
      console.log(e);
      if (e.data.type === 'post_added') {
        this.postAdded.next(e.data.data); //отфильтровать по типу в постах
      }
      if (e.data.type === 'post_deleted') {
        this.postDeleted.next(e.data.data);
      }
    });

    console.log(tokenService.getId());
    this.echo
      .private('user.' + this.tokenService.getId())
      .listen('UserPush', (e) => console.log(e));
  }
}
