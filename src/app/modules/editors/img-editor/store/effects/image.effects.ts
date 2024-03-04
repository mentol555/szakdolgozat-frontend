import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ImageActions } from "../actions/actionTypes";
import { ApiService } from "../../../../../core/services/api.service";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ImageEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {
  }

    saveImage$ = createEffect(() => this.actions$.pipe(
        ofType(ImageActions.saveImage),
        switchMap((action) => {
            return this.apiService.saveImage(action.href).pipe(
                map(response => {
                    this.router.navigate(['/view/image/' + response.id]);
                    this.toastrService.success("Image saved!", "Success");
                    return ImageActions.saveImageSuccess();
                })
            )
        })
    ))
}