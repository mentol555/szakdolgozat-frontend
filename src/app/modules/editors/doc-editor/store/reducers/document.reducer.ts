import { createReducer, on } from "@ngrx/store";
import { DocumentActions } from "../actions/actionTypes";
import { DocumentResponse } from "../../../../../shared/models/response/documentResponse";

export interface DocumentState {
    documents: DocumentResponse[]
}

export const initialDocumentState: DocumentState = {
    documents: []
};

export const documentReducer = createReducer(
    initialDocumentState,
    on(DocumentActions.loadDocumentsByUserIdSuccess, (state, action) => {
        return {
            ...state,
            documents: action.documents
        }
    })
);