import { Component, Input, OnInit } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ApiService } from "../../../core/services/api.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { DocumentService } from "../../../core/services/document.service";
import { CommentDto } from "../../../shared/models/comment";
import { CommentService } from "../../../core/services/comment.service";
import { AuthService } from "../../../core/services/auth.service";
import { FormControl } from "@angular/forms";
import {EntityType} from "../../../core/services/comment.service";
import { DocumentResponse } from "../../../shared/models/response/documentResponse";

@Component({
    selector: 'app-document-view',
    templateUrl: './document-view.component.html',
    styleUrl: './document-view.component.scss'
})
export class DocumentViewComponent implements OnInit {
  
    documentLoader$: Observable<DocumentResponse>;

    documentContent: SafeHtml;

    comments$: Observable<CommentDto[]> = this.commentService.getComments();

    isLoggedIn$ = this.authService.getIsLoggedIn();

    commentContent = new FormControl<string>('');

    documentId: number;

    @Input() set id(id: number) {
        this.documentId = id;
        this.documentLoader$ = this.documentService.getDocumentById(id).pipe(
            tap((document: DocumentResponse) => {
                this.documentContent = document.content;
            })
        );
        this.commentService.loadCommentsByDocumentId(id);
    }
  
    constructor(
        private apiService: ApiService, 
        private documentService: DocumentService,
        private commentService: CommentService,
        private authService: AuthService
    ) {}
  
    ngOnInit() {
    }

    postComment() {
        if(this.commentContent.value) {
            this.commentService.postComment(this.documentId, this.commentContent.value, EntityType.DOCUMENT);
            this.commentContent.reset();
        }
    }
}
