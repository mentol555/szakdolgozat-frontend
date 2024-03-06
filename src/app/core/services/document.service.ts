import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { DocumentActions } from "../../modules/editors/doc-editor/store/actions/actionTypes";

@Injectable()
export class DocumentService {
    constructor(
        private store: Store
    ) {
    }

    saveDocument(content: string) {
        const base64Content = btoa(content);
        this.store.dispatch(DocumentActions.saveDocument({content: base64Content}));
    }
}