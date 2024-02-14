import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrl: './doc-editor.component.scss'
})
export class DocEditorComponent implements OnInit {

    ngOnInit() {
        console.log("ONINIT DOCEDITOR")
    }
}
