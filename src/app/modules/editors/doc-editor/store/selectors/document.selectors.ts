import { createFeatureSelector, createSelector } from "@ngrx/store";

export const documentState = createFeatureSelector<any>('documentState');
export const profileState = createFeatureSelector<any>('profileState');
export const viewState = createFeatureSelector<any>('viewState');


export const documents = createSelector(
    profileState,
    (profileState) => profileState['profileState'].documents
);

export const comments = createSelector(
    viewState,
    (viewState) => viewState['viewState'].comments
);