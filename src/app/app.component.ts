import { Component } from '@angular/core';
import { WebSocketService } from '../app/core/services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'guest-book';
  constructor(private wsService: WebSocketService) {}
}
