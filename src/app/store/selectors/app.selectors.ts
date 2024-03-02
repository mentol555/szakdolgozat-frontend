import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppFeatureState } from "../reducers";
import { AppState } from "../reducers/app.reducer";

export const appState = createFeatureSelector<AppState>('appState')

export const currentUser = createSelector(
    appState,
    (appState) => appState.currentUser
);