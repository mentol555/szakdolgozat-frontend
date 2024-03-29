import { createAction, props } from "@ngrx/store";
import { User } from "../../shared/models/user";
import { PasswordChange, UserData } from "../../core/services/image.service";

export enum Actions {
    LOAD_LOGGED_IN_USER = '[Load Logged In User] Load logged in user',
    LOAD_LOGGED_IN_USER_SUCCESS = '[Load logged in user success] Load LoggedInUser Success',
    LOAD_LOGGED_IN_USER_FAILED = '[Load logged in user failed] Load loggedInUser Failed',

    UPDATE_USER_DATA = '[Update User Data] Update User Data',
    UPDATE_USER_DATA_SUCCESS = '[Update User Data Effect] Update UserData Success',
    UPDATE_USER_DATA_FAILED = '[Update User Data Effect] Update UserData Failed',

    CHANGE_PASSWORD = '[Change Password] Change Password',
    CHANGE_PASSWORD_SUCCESS = '[Change Password Effect] Password Changed',
    CHANGE_PASSWORD_FAILED = '[Change Password Effect] Password Not Changed'
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

  export const updateUserData = createAction(
    Actions.UPDATE_USER_DATA, props<{id: number, userdata: UserData}>()
  );

  export const updateUserDataSuccess = createAction(
    Actions.UPDATE_USER_DATA_SUCCESS, props<{user: User}>()
  );

  export const updateUserDataFailed = createAction(
    Actions.UPDATE_USER_DATA_FAILED
  );

  export const changePassword = createAction(
    Actions.CHANGE_PASSWORD, props<{id: number, passwordChange: PasswordChange}>()
  );

  export const changePasswordSuccess = createAction(
    Actions.CHANGE_PASSWORD_SUCCESS
  );

  export const changePasswordFailed = createAction(
    Actions.CHANGE_PASSWORD_FAILED
  );