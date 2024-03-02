import { createAction, props } from "@ngrx/store";
import { User } from "../../shared/models/user";

export enum Actions {
    LOAD_LOGGED_IN_USER = '[Load Logged In User] Load logged in user',
    LOAD_LOGGED_IN_USER_SUCCESS = '[Load logged in user success] Load LoggedInUser Success',
    LOAD_LOGGED_IN_USER_FAILED = '[Load logged in user failed] Load loggedInUser Failed'
}

export const loadLoggedInUser = createAction(
    Actions.LOAD_LOGGED_IN_USER
  );
  
  export const loadLoggedInUserSuccess = createAction(
    Actions.LOAD_LOGGED_IN_USER_SUCCESS, props<{ user: User }>()
  );
  
  export const loadLoggedInUserFailed = createAction(
    Actions.LOAD_LOGGED_IN_USER_FAILED
  );