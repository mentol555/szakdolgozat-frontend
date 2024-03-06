import { createAction, props } from "@ngrx/store";
import { ImageResponse } from "../../../../../shared/models/response/imageResponse";

export enum Actions {
    SAVE_IMAGE = '[Save Image] Save Image',
    SAVE_IMAGE_SUCCESS = '[Save Image Effect] Image Saved',
    SAVE_IMAGE_FAILED = '[Save Image Effect] Image Not Saved',

    GET_IMAGES_BY_USERID = '[Get Image by UserID] Get Images By UserID',
    GET_IMAGES_BY_USERID_SUCCESS = '[Get Image By UserID Effect] Images by UserID Retrieved',
    GET_IMAGES_BY_USERID_FAILED = '[Get Image by UserID Effect] Images by UserID Not Retrieved'
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