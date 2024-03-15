import { createReducer, on } from "@ngrx/store";
import { CommentDto } from "../../../shared/models/comment";
import { ImageActions } from "../../editors/img-editor/store/actions/actionTypes";
import { DocumentActions } from "../../editors/doc-editor/store/actions/actionTypes";

export interface ViewState {
    comments: CommentDto[]
}

export const initialImageState: ViewState = {
    comments: []
};

export const viewReducer = createReducer(
    initialImageState,
    on(ImageActions.loadCommentsByImageId, DocumentActions.loadCommentsByDocId, (state, action) => {
        return initialImageState
    }),
    on(ImageActions.loadCommentsByImageIdSuccess, DocumentActions.loadCommentsByDocIdSuccess, (state, action) => {
        return {
            ...state,
            comments: action.comments
        }
    }),
    on(ImageActions.postCommentToImageSuccess, DocumentActions.postCommentToDocumentSuccess, (state, action) => {
        const commentCopy = [...state.comments];
        commentCopy.push(action.comment);
        
        return {
            ...state,
            comments: commentCopy
        }
    })
);