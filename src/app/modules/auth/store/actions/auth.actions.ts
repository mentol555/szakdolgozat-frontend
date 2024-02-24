import { createAction, props } from "@ngrx/store";
import { LoginRequest } from "../../../../shared/models/request/loginRequest";

export enum Actions {
  LOGIN = '[Login User] Login User',
  LOGIN_SUCCESS = '[Login User Effect] User Login Success',
  LOGIN_FAILED = '[Login User Effect] User Login Failed'
}

export const loginUser = createAction(
  Actions.LOGIN, props<{ loginRequest: LoginRequest }>()
);

export const loginSuccess = createAction(
  Actions.LOGIN_SUCCESS
);

export const loginFailed = createAction(
  Actions.LOGIN_FAILED
);