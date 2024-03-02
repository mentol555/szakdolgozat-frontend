import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../../modules/auth/store/actions/actionTypes";
import { User } from "../../shared/models/user";
import { AppActions } from "../actions/actionTypes";

export interface AppState {
    currentUser: User
}

export const initialAppState: AppState = {
    currentUser: {} as User
};

export const appReducer = createReducer(
  initialAppState,
  on(AppActions.loadLoggedInUserSuccess, (state, action) => {
      return {
          ...state,
          currentUser: action.user
        }
  })
);
