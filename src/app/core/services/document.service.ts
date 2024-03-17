import { Injectable, SecurityContext } from "@angular/core";
import { Store } from "@ngrx/store";
import { DocumentActions } from "../../modules/editors/doc-editor/store/actions/actionTypes";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { DocumentResponse } from "../../shared/models/response/documentResponse";
import { Observable, map } from "rxjs";
import { DocumentSelectors } from "../../modules/editors/doc-editor/store/selectors";
import { Router } from "@angular/router";
import { ApiService } from "./api.service";

@Injectable()
export class DocumentService {
    constructor(
        private store: Store,
        private sanitizer: DomSanitizer,
        private router: Router,
        private apiService: ApiService
    ) {
    }

    saveDocument(content: string) {
        const base64Content = btoa(this.toBinaryStr(content));
        this.store.dispatch(DocumentActions.saveDocument({content: base64Content}));
    }

    modifyDocument(id: number, content: string) {
        const base64Content = btoa(this.toBinaryStr(content));
        this.store.dispatch(DocumentActions.modifyDocument({id, content: base64Content}));
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

    getDocumentById(id: number): Observable<DocumentResponse> {
        return this.apiService.getDocumentById(id).pipe(
            map(document => {
                const decodedDocument = this.renderDocument(document.content);
                    return {
                        id: document.id,
                        creatorUserId: document.creatorUserId,
                        content: decodedDocument
                    } as DocumentResponse;
            })
        )
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

    safeHtmlToString(text: SafeHtml) {
        return this.sanitizer.sanitize(SecurityContext.HTML, text);
    }

    openDocument(documentId: number) {
        this.router.navigate(['/view/document/' + documentId]);
    }

    editDocument(documentId: number) {
        this.router.navigate(['/doc-editor/'+ documentId]);
    }
}