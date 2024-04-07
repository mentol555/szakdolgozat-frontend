import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, throwError } from "rxjs";
import { AuthActions } from "../../modules/auth/store/actions/actionTypes";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../core/services/api.service";
import { AuthService } from "../../core/services/auth.service";
import { AppActions } from "../actions/actionTypes";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AppEffects {

  constructor(
    private toastrService: ToastrService,
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
    ));

    updateUserData$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.updateUserData),
        switchMap((action) => {
            return this.apiService.updateUserData(action.id, action.userdata).pipe(
                map(response => {
                    localStorage.setItem('currentUser', JSON.stringify(response.user));
                    localStorage.setItem('token', response.token);
                    this.toastrService.success("User data modified!", "Success");
                    return AppActions.updateUserDataSuccess({user: response.user});
                }),
                catchError((error) => {
                    this.toastrService.error("Failed to modify user data!", "Error");
                    throw(error);
                })
            )
        })
    ));

    changePassword$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.changePassword),
        switchMap((action) => {
            return this.apiService.changePassword(action.id, action.passwordChange).pipe(
                map(response => {
                    this.toastrService.success("Password changed! Log in using your new passord!", "Success");
                    this.authService.logOut();
                    return AppActions.changePasswordSuccess();
                }),
                catchError((error) => {
                    this.toastrService.error("Failed to modify password!", "Error");
                    throw(error);
                })
            )
        })
    ))


}