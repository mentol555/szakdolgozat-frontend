import { Component, Input, OnInit } from "@angular/core";
import { ImageService } from "../../../core/services/image.service";
import { ApiService } from "../../../core/services/api.service";
import { Observable, tap } from "rxjs";

@Component({
    selector: 'app-image-view',
    templateUrl: './image-view.component.html',
    styleUrl: './image-view.component.scss'
})
export class ImageViewComponent implements OnInit {

    imageLoader$: Observable<string>;

    imageData: string;

    @Input() set id(id: number) {
        this.imageLoader$ = this.apiService.getImageById(id).pipe(
            tap((imageHref:any) => {
                this.renderImage(imageHref); 
            })
        );
    }
    
    renderImage(imageData: string) {
        if (imageData && imageData.trim().length > 0) {
            this.imageData = imageData;
        }
    }
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit() {
    }
}
  