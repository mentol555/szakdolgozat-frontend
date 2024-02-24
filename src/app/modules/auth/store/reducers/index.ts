import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "./auth.reducer";

export interface AuthFeatureState {
  authState: AuthState,
}

export const reducers: ActionReducerMap<AuthFeatureState> = {
  authState: authReducer
};
