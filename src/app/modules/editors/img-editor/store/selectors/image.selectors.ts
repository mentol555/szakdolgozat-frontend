import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ImageState } from "../reducers/image.reducer";

export const imageState = createFeatureSelector<any>('imageState');
export const profileState = createFeatureSelector<any>('profileState');
export const viewState = createFeatureSelector<any>('viewState');

export const images = createSelector(
    profileState,
    (profileState) => profileState['profileState'].images
);

export const comments = createSelector(
    viewState,
    (viewState) => viewState['viewState'].comments
);