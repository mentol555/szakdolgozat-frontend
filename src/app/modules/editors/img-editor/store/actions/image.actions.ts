import { createAction, props } from "@ngrx/store";

export enum Actions {
    SAVE_IMAGE = '[Save Image] Save Image',
    SAVE_IMAGE_SUCCESS = '[Save Image Effect] Image Saved',
    SAVE_IMAGE_FAILED = '[Save Image Effect] Image Not Saved',

    // GET_IMAGE_BY_ID = '[Get Image] Get Image By ID',
    // GET_IMAGE_BY_ID_SUCCESS = '[Get Image Effect] Image Retrieved by ID',
    // GET_IMAGE_BY_ID_FAILED = '[Get Image Effect] Image Not Retrieved by ID'
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

// export const getImageById = createAction(
//     Actions.GET_IMAGE_BY_ID, props<{id: number}>()
// );

// export const getImageByIdSuccess = createAction(
//     Actions.GET_IMAGE_BY_ID_SUCCESS
// );

// export const getImageByIdFailed = createAction(
//     Actions.GET_IMAGE_BY_ID_FAILED
// );