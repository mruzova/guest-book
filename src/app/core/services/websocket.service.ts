import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import EchoLibrary from 'laravel-echo';
import { TokenService } from './token.service';
import { PostsService } from 'src/app/posts/posts.service';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  echo;
  publicChannelEcho;
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

    this.echo.channel('public-push').listen('PublicPush', (e) => {
      console.log(e);
    });
    console.log(tokenService.getId());
    this.echo
      .private('user.' + this.tokenService.getId())
      .listen('UserPush', (e) => console.log(e));
  }
}
