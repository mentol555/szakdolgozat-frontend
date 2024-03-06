import { createFeatureSelector } from "@ngrx/store";
import { DocumentState } from "../reducers/document.reducer";

export const documentState = createFeatureSelector<DocumentState>('documentState');
