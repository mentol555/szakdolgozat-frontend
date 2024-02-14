import { Component, OnInit } from '@angular/core';
import { Editor } from 'mini-canvas-editor';

@Component({
  selector: 'app-img-editor',
  templateUrl: './img-editor.component.html',
  styleUrl: './img-editor.component.scss'
})
export class ImgEditorComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log("ONINIT")
        const placeholder = document.getElementById('placeholder') as HTMLElement;
        Editor.createBlank(placeholder, 200, 300, {});
    }
}
