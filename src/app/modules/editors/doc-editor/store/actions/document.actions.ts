import { createAction, props } from "@ngrx/store";
import { DocumentResponse } from "../../../../../shared/models/response/documentResponse";
import { CommentDto } from "../../../../../shared/models/comment";
import { CommentRequest } from "../../../../../shared/models/request/commentRequest";

export enum Actions {
    SAVE_DOCUMENT = '[Save Document] Save Document',
    SAVE_DOCUMENT_SUCCESS = '[Save Document Effect] Document Saved',
    SAVE_DOCUMENT_FAILED = '[Save Document Effect] Document Not Saved',

    MODIFY_DOCUMENT = '[Modify Document] Modify Document',
    MODIFY_DOCUMENT_SUCCESS = '[Modify Document Effect] Document Modified',
    MODIFY_DOCUMENT_FAILED = '[Modify Document Effect] Document Not Modified',

    LOAD_DOCUMENTS_BY_USERID = '[Load Documents By UserID] Load Documents By UserID',
    LOAD_DOCUMENTS_BY_USERID_SUCCESS = '[Load Documents By UserID Success] Documents loaded by userID',
    LOAD_DOCUMENTS_BY_USERID_FAILED = '[Load Documents by UserID Failed] Failed to load documents by userID',

    LOAD_COMMENTS_BY_DOCID = '[Load Comments By DOCID] Load Comments By DOCID',
    LOAD_COMMENTS_BY_DOCID_SUCCESS = '[Load Comments By DOCID Effect] Comments By DOCID retrieved',
    LOAD_COMMENTS_BY_DOCID_FAILED = '[Load Comments By DOCID Effect] Load Comments By DOCID failed',

    POST_COMMENT_TO_DOCUMENT = '[Post Comment To Document] Post Comment To Document',
    POST_COMMENT_TO_DOCUMENT_SUCCESS = '[Post Comment To Document Effect] Post Commented To Document',
    POST_COMMENT_TO_DOCUMENT_FAILED = '[Post Comment To Document Effect] Post Comment To Document Failed'
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

export const modifyDocument = createAction(
    Actions.MODIFY_DOCUMENT, props<{id: number, content: string}>()
);

export const modifyDocumentSuccess = createAction(
    Actions.MODIFY_DOCUMENT_SUCCESS
);

export const modifyDocumentFailed = createAction(
    Actions.MODIFY_DOCUMENT_FAILED
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

export const loadCommentsByDocId = createAction(
    Actions.LOAD_COMMENTS_BY_DOCID, props<{documentId: number}>()
);

export const loadCommentsByDocIdSuccess = createAction(
    Actions.LOAD_COMMENTS_BY_DOCID_SUCCESS, props<{comments: CommentDto[]}>()
);

export const loadCommentsByDocIdFailed = createAction(
    Actions.LOAD_COMMENTS_BY_DOCID_FAILED
);

export const postCommentToDocument = createAction(
    Actions.POST_COMMENT_TO_DOCUMENT, props<{documentId: number, request: CommentRequest}>()
);

export const postCommentToDocumentSuccess = createAction(
    Actions.POST_COMMENT_TO_DOCUMENT_SUCCESS, props<{comment: CommentDto}>()
);

export const postCommentToDocumentFailed = createAction(
    Actions.POST_COMMENT_TO_DOCUMENT_FAILED
);