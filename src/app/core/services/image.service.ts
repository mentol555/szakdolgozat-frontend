import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ImageActions } from "../../modules/editors/img-editor/store/actions/actionTypes";
import { ApiService } from "./api.service";
import { Observable, map, tap } from "rxjs";
import { ImageResponse } from "../../shared/models/response/imageResponse";
import { ImageSelectors } from "../../modules/editors/img-editor/store/selectors";
import { Router } from "@angular/router";

@Injectable()
export class ImageService {
    constructor(
        private store: Store,
        private apiService: ApiService,
        private router: Router
    ) {
    }

    saveImage(href: string) {
        this.store.dispatch(ImageActions.saveImage({href}));
    }

    getImageById(id: number): Observable<ImageResponse> {
        return this.apiService.getImageById(id).pipe(
            map((image: ImageResponse) => {
                const convertedImage = this.convertImage(image);
                return {
                    id: image.id,
                    creatorUserId: image.creatorUserId,
                    imageData: convertedImage
                } as ImageResponse
            })
        );
    }

    loadImagesByUserId(userId: number) {
        this.store.dispatch(ImageActions.getImagesByUserId({userId}));
    }

    getImagesByUserId(): Observable<ImageResponse[]> {
        return this.store.select(ImageSelectors.imageSelector.images).pipe(
            map((images: ImageResponse[]) => {
                return images?.map(image => {
                    const convertedImage = this.convertImage(image);
                    return {
                        id: image.id,
                        creatorUserId: image.creatorUserId,
                        imageData: convertedImage
                    } as ImageResponse;
                });
            })
        );
    }

    convertImage(image: ImageResponse) {
        const byteCharacters = atob(image.imageData);
        const byteArray = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteArray[i] = byteCharacters.charCodeAt(i);
        }

        const blob = new Blob([byteArray], { type: 'image/png' });
        const data = URL.createObjectURL(blob);

        return data;
    }

    openImage(imageId: number) {
        this.router.navigate(['/view/image/' + imageId]);
    }
}