import { createAction, props } from "@ngrx/store";
import { DocumentResponse } from "../../../../../shared/models/response/documentResponse";

export enum Actions {
    SAVE_DOCUMENT = '[Save Document] Save Document',
    SAVE_DOCUMENT_SUCCESS = '[Save Document Effect] Document Saved',
    SAVE_DOCUMENT_FAILED = '[Save Document Effect] Document Not Saved',

    LOAD_DOCUMENTS_BY_USERID = '[Load Documents By UserID] Load Documents By UserID',
    LOAD_DOCUMENTS_BY_USERID_SUCCESS = '[Load Documents By UserID Success] Documents loaded by userID',
    LOAD_DOCUMENTS_BY_USERID_FAILED = '[Load Documents by UserID Failed] Failed to load documents by userID'
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

export const loadDocumentsByUserId = createAction(
    Actions.LOAD_DOCUMENTS_BY_USERID, props<{userId: number}>()
);

export const loadDocumentsByUserIdSuccess = createAction(
    Actions.LOAD_DOCUMENTS_BY_USERID_SUCCESS, props<{documents: DocumentResponse[]}>()
);

export const loadDocumentsByUserIdFailed = createAction(
    Actions.LOAD_DOCUMENTS_BY_USERID_FAILED
);