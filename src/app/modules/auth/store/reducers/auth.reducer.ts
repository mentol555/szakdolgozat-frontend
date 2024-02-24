import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/actionTypes";

export interface AuthState {
}

export const initialAuthState: AuthState = {
};

export const authReducer = createReducer(
  initialAuthState
);
