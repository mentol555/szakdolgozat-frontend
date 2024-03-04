import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ImageActions } from "../../modules/editors/img-editor/store/actions/actionTypes";

@Injectable()
export class ImageService {
    constructor(
        private store: Store
    ) {
    }

    saveImage(href: string) {
        this.store.dispatch(ImageActions.saveImage({href}));
    }
}