import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service';
import { TokenService } from '../core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    public tokenService: TokenService
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.loginService.logout();
  }
}
