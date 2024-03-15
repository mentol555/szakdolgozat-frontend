import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiService } from "./api.service";
import { CommentRequest } from "../../shared/models/request/commentRequest";
import { AuthService } from "./auth.service";
import { ImageActions } from "../../modules/editors/img-editor/store/actions/actionTypes";
import { ImageSelectors } from "../../modules/editors/img-editor/store/selectors";

@Injectable()
export class CommentService {
    constructor(
        private store: Store,
        private apiService: ApiService,
        private authService: AuthService
    ) {
    }

    loadCommentsByImageId(imageId: number) {
        this.store.dispatch(ImageActions.getCommentsByImageId({imageId}));
    }

    getComments() {
        return this.store.select(ImageSelectors.imageSelector.comments);
    }

    postCommentToImage(imageId: number, content: string) {
        const trimmedContent = content.trim();
        this.authService.getCurrentUser().subscribe(user => {
            const request: CommentRequest = {
                content: trimmedContent,
                commenterAvatar: '',
                commenterName: user.uname
            };
            
            this.store.dispatch(ImageActions.postCommentToImage({imageId, request}));
            } 
        );
    }
}