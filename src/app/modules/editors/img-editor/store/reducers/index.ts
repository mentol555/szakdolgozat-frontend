import { ActionReducerMap } from "@ngrx/store";
import { ImageState, imageReducer } from "./image.reducer";

export interface ImageFeatureState {
  imageState: ImageState
}

export const reducers: ActionReducerMap<ImageFeatureState> = {
  imageState: imageReducer
};
