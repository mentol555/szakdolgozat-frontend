import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ImageActions } from "../actions/actionTypes";
import { ApiService } from "../../../../../core/services/api.service";
import { ToastrService } from "ngx-toastr";
import { ImageService } from "../../../../../core/services/image.service";

@Injectable()
export class ImageEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private apiService: ApiService,
    private toastrService: ToastrService,
    private imageService: ImageService
  ) {
  }

    saveImage$ = createEffect(() => this.actions$.pipe(
        ofType(ImageActions.saveImage),
        switchMap((action) => {
            return this.apiService.saveImage(action.href).pipe(
                map(response => {
                    this.imageService.openImage(response.id);
                    this.toastrService.success("Image saved!", "Success");
                    return ImageActions.saveImageSuccess();
                })
            )
        })
    ))

    modifyImage$ = createEffect(() => this.actions$.pipe(
        ofType(ImageActions.modifyImage),
        switchMap((action) => {
            return this.apiService.modifyImage(action.id, action.href).pipe(
                map(response => {
                    this.imageService.openImage(response.id);
                    this.toastrService.success("Image modified!", "Success");
                    return ImageActions.modifyImageSuccess();
                })
            )
        })
    ))

    getImagesByUserId = createEffect(() => this.actions$.pipe(
        ofType(ImageActions.getImagesByUserId),
        switchMap(action => {
            return this.apiService.getImagesByUserId(action.userId).pipe(
                map(response => {
                    return ImageActions.getImagesByUserIdSuccess({images: response});
                })
            )
        })
    ))

    loadCommentsByImageId = createEffect(() => this.actions$.pipe(
        ofType(ImageActions.loadCommentsByImageId),
        switchMap(action => {
            return this.apiService.getCommentsByImageId(action.imageId).pipe(
                map(response => {
                    return ImageActions.loadCommentsByImageIdSuccess({comments: response});
                })
            )
        })
    ))

    postCommentToImage$ = createEffect(() => this.actions$.pipe(
        ofType(ImageActions.postCommentToImage),
        switchMap(action => {
            return this.apiService.postCommentToImage(action.imageId, action.request).pipe(
                map(response => {
                    return ImageActions.postCommentToImageSuccess({comment: response});
                })
            )
        })
    ))
}