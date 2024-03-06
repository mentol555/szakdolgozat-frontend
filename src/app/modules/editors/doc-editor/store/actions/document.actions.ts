import { createAction, props } from "@ngrx/store";

export enum Actions {
    SAVE_DOCUMENT = '[Save Document] Save Document',
    SAVE_DOCUMENT_SUCCESS = '[Save Document Effect] Document Saved',
    SAVE_DOCUMENT_FAILED = '[Save Document Effect] Document Not Saved'
}

export const saveDocument = createAction(
    Actions.SAVE_DOCUMENT, props<{content: string}>()
);

export const saveDocumentSuccess = createAction(
    Actions.SAVE_DOCUMENT_SUCCESS
);

export const saveDocumentFailed = createAction(
    Actions.SAVE_DOCUMENT_FAILED
);