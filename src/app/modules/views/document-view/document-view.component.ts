import { Component, Input, OnInit } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ApiService } from "../../../core/services/api.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

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
                this.renderDocument(documentContent); 
            })
        );
    }
    
    renderDocument(documentContent: string) {
        if (documentContent && documentContent.trim().length > 0) {
            const decoded = atob(documentContent);
            this.documentContent = this.sanitizer.bypassSecurityTrustHtml(decoded);
        }
    }
  
    constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {}
  
    ngOnInit() {
    }
}
