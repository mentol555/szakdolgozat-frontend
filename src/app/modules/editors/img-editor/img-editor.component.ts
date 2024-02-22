import { Component, OnInit } from '@angular/core';
import { Editor } from 'mini-canvas-editor';

@Component({
  selector: 'app-img-editor',
  templateUrl: './img-editor.component.html',
  styleUrl: './img-editor.component.scss'
})
export class ImgEditorComponent implements OnInit {

    editor: Editor;

    constructor() {}

    ngOnInit() {
        console.log("ONINIT")
        const placeholder = document.getElementById('placeholder') as HTMLElement;
        this.editor = Editor.createBlank(placeholder, 700, 700, {});
    }

    onDownloadClicked() {
		const a = document.createElement('a');
		a.download = 'crop.png';
		a.href = this.editor.render().toDataURL('image/png');
		a.click();
	};
}
