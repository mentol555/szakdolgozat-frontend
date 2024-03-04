import { createReducer, on } from "@ngrx/store";

export interface ImageState {
}

export const initialImageState: ImageState = {
};

export const imageReducer = createReducer(
  initialImageState
);
