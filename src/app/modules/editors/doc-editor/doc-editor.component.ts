import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrl: './doc-editor.component.scss'
})
export class DocEditorComponent implements OnInit {

    content: string;

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
            ['insert', ['table', 'picture', 'link', 'video', 'hr']]
        ],
        fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
    }

    ngOnInit() {
    }

    changeContent(editorContent: string) {
        this.content = editorContent;
    }

    getContent() {
        return this.content;
    }
}
