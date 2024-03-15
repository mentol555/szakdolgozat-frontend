import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { DocumentActions } from "../../modules/editors/doc-editor/store/actions/actionTypes";
import { DomSanitizer } from "@angular/platform-browser";
import { DocumentResponse } from "../../shared/models/response/documentResponse";
import { Observable, map } from "rxjs";
import { DocumentSelectors } from "../../modules/editors/doc-editor/store/selectors";
import { Router } from "@angular/router";

@Injectable()
export class DocumentService {
    constructor(
        private store: Store,
        private sanitizer: DomSanitizer,
        private router: Router
    ) {
    }

    saveDocument(content: string) {
        const base64Content = btoa(this.toBinaryStr(content));
        this.store.dispatch(DocumentActions.saveDocument({content: base64Content}));
    }

    toBinaryStr(str: string) {
        const encoder = new TextEncoder();
        // 1: split the UTF-16 string into an array of bytes
        const charCodes = encoder.encode(str);
        // 2: concatenate byte data to create a binary string
        return String.fromCharCode(...charCodes);
    }

    loadDocumentsByUserId(userId: number) {
        this.store.dispatch(DocumentActions.loadDocumentsByUserId({userId}));
    }

    getDocumentsByUserId(): Observable<DocumentResponse[]> {
        return this.store.select(DocumentSelectors.documentSelector.documents).pipe(
            map((documents: DocumentResponse[]) => {
                return documents?.map(document => {
                    const decodedDocument = this.renderDocument(document.content);
                    return {
                        id: document.id,
                        creatorUserId: document.creatorUserId,
                        content: decodedDocument
                    } as DocumentResponse;
                });
            })
        );
    }

    renderDocument(documentContent: string) {
        const decoded = atob(documentContent);
        return this.sanitizer.bypassSecurityTrustHtml(decoded);
    }

    openDocument(documentId: number) {
        this.router.navigate(['/view/document/' + documentId]);
    }
}