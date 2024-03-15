import { createReducer, on } from "@ngrx/store";
import { CommentDto } from "../../../shared/models/comment";
import { ImageActions } from "../../editors/img-editor/store/actions/actionTypes";

export interface ViewState {
    comments: CommentDto[]
}

export const initialImageState: ViewState = {
    comments: []
};

export const viewReducer = createReducer(
    initialImageState,
    on(ImageActions.getCommentsByImageIdSuccess, (state, action) => {
        return {
            ...state,
            comments: action.comments
        }
    }),
    on(ImageActions.postCommentToImageSuccess, (state, action) => {
        const commentCopy = [...state.comments];
        commentCopy.push(action.comment);
        
        return {
            ...state,
            comments: commentCopy
        }
    })
);