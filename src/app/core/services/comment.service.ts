import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiService } from "./api.service";
import { CommentRequest } from "../../shared/models/request/commentRequest";
import { AuthService } from "./auth.service";
import { ImageActions } from "../../modules/editors/img-editor/store/actions/actionTypes";
import { ImageSelectors } from "../../modules/editors/img-editor/store/selectors";
import { DocumentActions } from "../../modules/editors/doc-editor/store/actions/actionTypes";
import { Observable } from "rxjs";
import { CommentDto } from "../../shared/models/comment";

export enum EntityType  {
    IMAGE = "IMAGE",
    DOCUMENT = "DOCUMENT"
}

@Injectable()
export class CommentService {
    constructor(
        private store: Store,
        private apiService: ApiService,
        private authService: AuthService
    ) {
    }

    loadCommentsByImageId(imageId: number) {
        this.store.dispatch(ImageActions.loadCommentsByImageId({imageId}));
    }

    loadCommentsByDocumentId(documentId: number) {
        this.store.dispatch(DocumentActions.loadCommentsByDocId({documentId}));
    }

    getComments(): Observable<CommentDto[]> {
        return this.store.select(ImageSelectors.imageSelector.comments);
    }

    postComment(id: number, content: string, type: EntityType) {
        const trimmedContent = content.trim();
        if(!trimmedContent){
            return;
        }
        this.authService.getCurrentUser().subscribe(user => {
            const request: CommentRequest = {
                content: trimmedContent,
                commenterAvatar: user.avatar,
                commenterName: user.uname
            };
            
            if(type === EntityType.DOCUMENT) {
                this.store.dispatch(DocumentActions.postCommentToDocument({documentId: id, request}));
            } else {
                this.store.dispatch(ImageActions.postCommentToImage({imageId: id, request}));
            }
            } 
        );
    }
}