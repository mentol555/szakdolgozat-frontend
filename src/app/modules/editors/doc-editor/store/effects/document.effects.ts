import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../../../core/services/api.service";
import { ToastrService } from "ngx-toastr";
import { DocumentActions } from "../actions/actionTypes";
import { DocumentService } from "../../../../../core/services/document.service";

@Injectable()
export class DocumentEffects {

  constructor(
    private documentService: DocumentService,
    private actions$: Actions,
    private apiService: ApiService,
    private toastrService: ToastrService
  ) {
  }

    saveDocument$ = createEffect(() => this.actions$.pipe(
        ofType(DocumentActions.saveDocument),
        switchMap((action) => {
            return this.apiService.saveDocument(action.content).pipe(
                map(response => {
                    this.documentService.openDocument(response.id);
                    this.toastrService.success("Document saved!", "Success");
                    return DocumentActions.saveDocumentSuccess();
                })
            )
        })
    ))

    loadDocumentsByUserId = createEffect(() => this.actions$.pipe(
        ofType(DocumentActions.loadDocumentsByUserId),
        switchMap(action => {
            return this.apiService.loadDocumentsByUserId(action.userId).pipe(
                map(response => {
                    return DocumentActions.loadDocumentsByUserIdSuccess({documents: response});
                })
            )
        })
    ))
}