import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../../core/services/document.service';
import { ApiService } from '../../../core/services/api.service';
import { Observable, tap } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';
import { AuthService } from '../../../core/services/auth.service';
import { DocumentResponse } from '../../../shared/models/response/documentResponse';
import { CustomEditorMode } from '../../../core/services/image.service';

declare var $: any;

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrl: './doc-editor.component.scss'
})
export class DocEditorComponent implements OnInit {

    @Input() set id(id: number) {
        if(id) {
            this.documentId = id;
            this.documentLoader$ = this.documentService.getDocumentById(id).pipe(
                tap((document: DocumentResponse) => {
                    if(document) {
                        const currentUserId = this.authService.getUserId();
                        if(currentUserId) {
                            if(!document.creatorUserId || document.creatorUserId !== +currentUserId) {
                                this.authService.notAuthorized();
                            }
                        }
                        const content = this.documentService.safeHtmlToString(document.content);
                        $(document).ready(function() { $('.summernote').summernote('code', String(content)); });
                        this.mode = CustomEditorMode.MODIFY;
                    }
                })
            );
        }
    }

    mode = CustomEditorMode.CREATE;
    CustomEditorMode = CustomEditorMode;
    documentLoader$: Observable<DocumentResponse>;
    documentId: number;
    content: string;

    safeContent: SafeHtml;

    config = {
        placeholder: '',
        tabsize: 2,
        width: '50%',
        uploadImagePath: '/api/upload',
        toolbar: [
            ['misc', ['codeview', 'undo', 'redo']],
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
            ['fontsize', ['fontname', 'fontsize', 'color']],
            ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
            ['insert', ['table', 'picture', 'link', 'hr']]
        ],
        fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
    }

    constructor(private documentService: DocumentService, private authService: AuthService) {}

    ngOnInit() {
    }

    changeContent(editorContent: string) {
        this.content = editorContent;
    }

    getContent() {
        return this.content;
    }

    onSave() {
        if(this.mode === CustomEditorMode.CREATE) {
            this.documentService.saveDocument(this.getContent());
        } else {
            this.documentService.modifyDocument(this.documentId, this.getContent());
        }
        
    }
}
