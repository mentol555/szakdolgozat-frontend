import { Component, Input, OnInit } from "@angular/core";
import { ImageService } from "../../../core/services/image.service";
import { ApiService } from "../../../core/services/api.service";
import { Observable, tap } from "rxjs";
import { ImageResponse } from "../../../shared/models/response/imageResponse";
import { CommentDto } from "../../../shared/models/comment";
import { CommentService } from "../../../core/services/comment.service";
import { FormControl } from "@angular/forms";
import { AuthService } from "../../../core/services/auth.service";

@Component({
    selector: 'app-image-view',
    templateUrl: './image-view.component.html',
    styleUrl: './image-view.component.scss'
})
export class ImageViewComponent implements OnInit {

    imageLoader$: Observable<ImageResponse>;
    commentLoader$: Observable<ImageResponse>;

    comments$: Observable<CommentDto[]> = this.commentService.getComments();

    imageId: number;
    imageData: string;

    isLoggedIn$ = this.authService.getIsLoggedIn();

    commentContent = new FormControl<string>('');

    @Input() set id(id: number) {
        this.imageId = id;
        this.imageLoader$ = this.imageService.getImageById(id).pipe(
            tap(image => {
                this.imageData = image.imageData
            })
        );
        this.commentService.loadCommentsByImageId(id);
    }
  
    constructor(
        private imageService: ImageService, 
        private commentService: CommentService,
        private authService: AuthService
        ) {}
  
    ngOnInit() {
    }

    postComment() {
        if(this.commentContent.value) {
            this.commentService.postCommentToImage(this.imageId, this.commentContent.value);
            this.commentContent.reset();
        }
    }
}
  