import { createReducer, on } from "@ngrx/store";
import { ImageActions } from "../actions/actionTypes";
import { ImageResponse } from "../../../../../shared/models/response/imageResponse";
import { DocumentActions } from "../../../doc-editor/store/actions/actionTypes";

export interface ImageState {
    images: ImageResponse[]
}

export const initialImageState: ImageState = {
    images: []
};

export const imageReducer = createReducer(
    initialImageState,
    on(ImageActions.getImagesByUserIdSuccess, (state, action) => {
        return {
            ...state,
            images: action.images
        }
    })
);