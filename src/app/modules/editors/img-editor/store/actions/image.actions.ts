import { createAction, props } from "@ngrx/store";
import { ImageResponse } from "../../../../../shared/models/response/imageResponse";
import { CommentDto } from "../../../../../shared/models/comment";
import { CommentRequest } from "../../../../../shared/models/request/commentRequest";

export enum Actions {
    SAVE_IMAGE = '[Save Image] Save Image',
    SAVE_IMAGE_SUCCESS = '[Save Image Effect] Image Saved',
    SAVE_IMAGE_FAILED = '[Save Image Effect] Image Not Saved',

    GET_IMAGES_BY_USERID = '[Get Image by UserID] Get Images By UserID',
    GET_IMAGES_BY_USERID_SUCCESS = '[Get Image By UserID Effect] Images by UserID Retrieved',
    GET_IMAGES_BY_USERID_FAILED = '[Get Image by UserID Effect] Images by UserID Not Retrieved',

    LOAD_COMMENTS_BY_IMAGEID = '[Load Comments By ImageID] Load Comments By ImageID',
    LOAD_COMMENTS_BY_IMAGEID_SUCCESS = '[Load Comments By IMGID Effect] Comments By ImageID retrieved',
    LOAD_COMMENTS_BY_IMAGEID_FAILED = '[Load Comments By IMGID Effect] Load Comments By ImageID failed',

    POST_COMMENT_TO_IMAGE = '[Post Comment To Image] Post Comment To image',
    POST_COMMENT_TO_IMAGE_SUCCESS = '[Post Comment To Image Effect] Post Commented To image',
    POST_COMMENT_TO_IMAGE_FAILED = '[Post Comment To Image Effect] Post Comment To image Failed'
}

export const saveImage = createAction(
    Actions.SAVE_IMAGE, props<{href: string}>()
);

export const saveImageSuccess = createAction(
    Actions.SAVE_IMAGE_SUCCESS
);

export const saveImageFailed = createAction(
    Actions.SAVE_IMAGE_FAILED
);

export const getImagesByUserId = createAction(
    Actions.GET_IMAGES_BY_USERID, props<{userId: number}>()
);

export const getImagesByUserIdSuccess = createAction(
    Actions.GET_IMAGES_BY_USERID_SUCCESS, props<{images: ImageResponse[]}>()
);

export const getImagesByUserIdFailed = createAction(
    Actions.GET_IMAGES_BY_USERID_FAILED
);

export const loadCommentsByImageId = createAction(
    Actions.LOAD_COMMENTS_BY_IMAGEID, props<{imageId: number}>()
);

export const loadCommentsByImageIdSuccess = createAction(
    Actions.LOAD_COMMENTS_BY_IMAGEID_SUCCESS, props<{comments: CommentDto[]}>()
);

export const loadCommentsByImageIdFailed = createAction(
    Actions.LOAD_COMMENTS_BY_IMAGEID_FAILED
);

export const postCommentToImage = createAction(
    Actions.POST_COMMENT_TO_IMAGE, props<{imageId: number, request: CommentRequest}>()
);

export const postCommentToImageSuccess = createAction(
    Actions.POST_COMMENT_TO_IMAGE_SUCCESS, props<{comment: CommentDto}>()
);

export const postCommentToImageFailed = createAction(
    Actions.POST_COMMENT_TO_IMAGE_FAILED
);