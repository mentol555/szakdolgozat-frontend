import { Component, Input, OnInit } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ApiService } from "../../../core/services/api.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { DocumentService } from "../../../core/services/document.service";

@Component({
    selector: 'app-document-view',
    templateUrl: './document-view.component.html',
    styleUrl: './document-view.component.scss'
})
export class DocumentViewComponent implements OnInit {
  
    documentLoader$: Observable<string>;

    documentContent: SafeHtml;

    @Input() set id(id: number) {
        this.documentLoader$ = this.apiService.getDocumentById(id).pipe(
            tap((documentContent:any) => {
                this.documentContent = this.documentService.renderDocument(documentContent);
            })
        );
    }
  
    constructor(private apiService: ApiService, private documentService: DocumentService) {}
  
    ngOnInit() {
    }
}
