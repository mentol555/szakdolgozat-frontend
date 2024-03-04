import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ImageState } from "../reducers/image.reducer";

export const imageState = createFeatureSelector<ImageState>('imageState');
