import { createAction, props } from "@ngrx/store";
import { LoginRequest } from "../../../../shared/models/request/loginRequest";
import { RegisterRequest } from "../../../../shared/models/request/registerRequest";
import { User } from "../../../../shared/models/user";

export enum Actions {
  LOGIN = '[Login User] Login User',
  LOGIN_SUCCESS = '[Login User Effect] User Login Success',
  LOGIN_FAILED = '[Login User Effect] User Login Failed',

  REGISTER = '[REGISTER User] REGISTER User',
  REGISTER_SUCCESS = '[REGISTER User Effect] User REGISTER Success',
  REGISTER_FAILED = '[REGISTER User Effect] User REGISTER Failed',

  LOAD_LOGGED_IN_USER = '[Load Logged In User] Load logged in user',
  LOAD_LOGGED_IN_USER_SUCCESS = '[Load logged in user success] Load LoggedInUser Success',
  LOAD_LOGGED_IN_USER_FAILED = '[Load logged in user failed] Load loggedInUser Failed'
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

export const registerUser = createAction(
  Actions.REGISTER, props<{ registerRequest: RegisterRequest }>()
);
  
export const registerSuccess = createAction(
  Actions.REGISTER_SUCCESS
);
  
export const registerFailed = createAction(
  Actions.REGISTER_FAILED
);