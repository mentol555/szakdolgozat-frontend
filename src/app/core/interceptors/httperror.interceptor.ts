import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttperrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
        tap(() => {},
        (error:any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 403) {
              this.router.navigate(['/auth/login']);
              return;
            }
            //this.toasterService.error(error.error.message, error.error.title, { positionClass: 'toast-top-center' });
          }
        })
      );
  }
}

