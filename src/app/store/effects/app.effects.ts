import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap } from "rxjs";
import { AuthActions } from "../../modules/auth/store/actions/actionTypes";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../core/services/api.service";
import { AuthService } from "../../core/services/auth.service";
import { AppActions } from "../actions/actionTypes";

@Injectable()
export class AppEffects {

  constructor(
    private router: Router,
    private apiService: ApiService,
    private actions$: Actions,
    private authService: AuthService
  ) {
  }

    loadLoggedInUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.loginSuccess, AuthActions.registerSuccess, AppActions.loadLoggedInUser),
        switchMap(() => {
            const userId = this.authService.getUserId();
            if(userId) {
                return this.apiService.getUserById(+userId).pipe(
                    map(response => {
                        localStorage.setItem('currentUser', JSON.stringify(response));
                        return AppActions.loadLoggedInUserSuccess({user: response});
                    })
                )
            } else {
                return of(AppActions.loadLoggedInUserFailed());
            }
        })
    ))
}