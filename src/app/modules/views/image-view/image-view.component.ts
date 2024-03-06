import { Component, Input, OnInit } from "@angular/core";
import { ImageService } from "../../../core/services/image.service";
import { ApiService } from "../../../core/services/api.service";
import { Observable, tap } from "rxjs";
import { ImageResponse } from "../../../shared/models/response/imageResponse";

@Component({
    selector: 'app-image-view',
    templateUrl: './image-view.component.html',
    styleUrl: './image-view.component.scss'
})
export class ImageViewComponent implements OnInit {

    imageLoader$: Observable<ImageResponse>;

    imageData: string;

    @Input() set id(id: number) {
        this.imageLoader$ = this.imageService.getImageById(id).pipe(
            tap(image => {
                this.imageData = image.imageData
            })
        );
    }
  
    constructor(private imageService: ImageService) {}
  
    ngOnInit() {
    }
}
  