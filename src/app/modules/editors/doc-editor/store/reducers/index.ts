import { ActionReducerMap } from "@ngrx/store";
import { DocumentState, documentReducer } from "./document.reducer";

export interface DocumentFeatureState {
  documentState: DocumentState
}

export const reducers: ActionReducerMap<DocumentFeatureState> = {
    documentState: documentReducer
};
