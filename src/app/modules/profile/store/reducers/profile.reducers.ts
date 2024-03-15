import { createReducer, on } from "@ngrx/store";
import { DocumentResponse } from "../../../../shared/models/response/documentResponse";
import { ImageResponse } from "../../../../shared/models/response/imageResponse";
import { ImageActions } from "../../../editors/img-editor/store/actions/actionTypes";
import { DocumentActions } from "../../../editors/doc-editor/store/actions/actionTypes";

export interface ProfileState {
    images: ImageResponse[],
    documents: DocumentResponse[]
}

export const initialImageState: ProfileState = {
    images: [],
    documents: []
};

export const profileReducer = createReducer(
    initialImageState,
    on(ImageActions.getImagesByUserIdSuccess, (state, action) => {
        return {
            ...state,
            images: action.images
        }
    }),
    on(DocumentActions.loadDocumentsByUserIdSuccess, (state, action) => {
        return {
            ...state,
            documents: action.documents
        }
    })
);