import { NgModule } from '@angular/core';

import { ApiInterceptor } from '../core/interceptors/api.interceptor';

import { AuthInterceptor } from '../core/interceptors/auth.interceptor';
import { AuthGuard } from '../auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
})
export class CoreModule {}
