import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../actions/actionTypes';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../../../core/services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private router: Router,
    private apiService: ApiService,
    private actions$: Actions,
    private authService: AuthService
  ) {
  }

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginUser),
    switchMap(action => {
      return this.apiService.login(action.loginRequest).pipe(
        map(response => {
          if (!response.token) {
            return AuthActions.loginFailed();
          }
          localStorage.setItem('token', response.token);
          this.authService.isLoggedIn = true;
          this.router.navigate(['/']);
          return AuthActions.loginSuccess();
        })
      );
    })
  ));

}
