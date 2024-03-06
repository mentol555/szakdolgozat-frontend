import { createReducer, on } from "@ngrx/store";

export interface DocumentState {
}

export const initialDocumentState: DocumentState = {
};

export const documentReducer = createReducer(
    initialDocumentState
);
