import { ActionReducerMap } from "@ngrx/store";
import { AppState, appReducer } from "./app.reducer";

export interface AppFeatureState {
  appState: AppState
}

export const reducers: ActionReducerMap<AppFeatureState> = {
  appState: appReducer
};
