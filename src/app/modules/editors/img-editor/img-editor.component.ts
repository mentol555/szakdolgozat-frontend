import { Component, Input, OnInit } from '@angular/core';
import { Editor, EditorMode } from 'mini-canvas-editor';
import { CustomEditorMode, ImageService } from '../../../core/services/image.service';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ImageResponse } from '../../../shared/models/response/imageResponse';
import { ApiService } from '../../../core/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-img-editor',
  templateUrl: './img-editor.component.html',
  styleUrl: './img-editor.component.scss'
})
export class ImgEditorComponent implements OnInit {
    
    @Input() set id(id: number) {
        if (id) {
            this.imageLoader$ = this.imageService.getImageById(id).pipe(
                tap(image => {
                    if(image) {
                        const currentUserId = this.authService.getUserId();
                        if(currentUserId) {
                            if(!image.creatorUserId || image.creatorUserId !== +currentUserId) {
                                this.authService.notAuthorized();
                            }
                        }
                        const img1 = new Image();
                        img1.onload = () => {
                            this.editor = Editor.createFromImage(this.placeholder, img1, { workspaceHeight: 700, workspaceWidth: 700 }, {});
                        };
                        img1.src = image.imageData;
                        this.mode = CustomEditorMode.MODIFY;
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    if(error.status === 404) {
                        this.newImage();
                    }
                    throw(error);    
                })
            );
        } else {
            this.newImage();
        }
    }

    editor: Editor;
    CustomEditorMode = CustomEditorMode;

    mode: CustomEditorMode = CustomEditorMode.CREATE;
    
    imageLoader$: Observable<ImageResponse>;
    placeholder: HTMLElement;

    constructor(private imageService: ImageService, private authService: AuthService) {}

    ngOnInit() {
        this.placeholder = document.getElementById('placeholder') as HTMLElement;
    }

    newImage() {
        this.placeholder = document.getElementById('placeholder') as HTMLElement;
        this.editor = Editor.createBlank(this.placeholder, 700, 700, {});
    }

    onSave() {
		const a = document.createElement('a');
		a.download = 'crop.png';
        const rendered = this.editor.render();
		a.href = rendered.toDataURL('image/png');
        if(this.mode === CustomEditorMode.CREATE) {
            this.imageService.saveImage(a.href);
        } else {
            // TODO : MODIFY IMAGE
            //this.imageService.modifyImage(a.href, this.);
        }
	};
}
