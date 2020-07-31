import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<import('@angular/common/http').HttpEvent<any>> {
    req = req.clone({
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + this.tokenService.getToken()
      ),
    });
    return next.handle(req);
  }
}
