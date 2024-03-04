import { Component, OnInit } from '@angular/core';
import { Editor } from 'mini-canvas-editor';
import { ImageService } from '../../../core/services/image.service';

@Component({
  selector: 'app-img-editor',
  templateUrl: './img-editor.component.html',
  styleUrl: './img-editor.component.scss'
})
export class ImgEditorComponent implements OnInit {

    editor: Editor;

    constructor(private imageService: ImageService) {}

    ngOnInit() {
        const placeholder = document.getElementById('placeholder') as HTMLElement;
        this.editor = Editor.createBlank(placeholder, 700, 700, {});
    }

    onSave() {
		const a = document.createElement('a');
		a.download = 'crop.png';
        const rendered = this.editor.render();
		a.href = rendered.toDataURL('image/png');
        this.imageService.saveImage(a.href);
	};
}
