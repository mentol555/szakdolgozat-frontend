import { createFeatureSelector, createSelector } from "@ngrx/store";

export const documentState = createFeatureSelector<any>('documentState');
export const profileState = createFeatureSelector<any>('profileState');

export const documents = createSelector(
    profileState,
    (profileState) => profileState['profileState'].documents
);