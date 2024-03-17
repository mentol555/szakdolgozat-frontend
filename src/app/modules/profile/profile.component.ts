import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../core/services/image.service';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { DocumentService } from '../../core/services/document.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

    selectedTab = 1;

    images$ = this.imageService.getImagesByUserId();
    documents$ = this.documentService.getDocumentsByUserId();


    constructor(
        private imageService: ImageService, 
        private authService: AuthService,
        private documentService: DocumentService
        ) {}

    ngOnInit() {
        const userId = this.authService.getUserId();
        if(userId) {
            this.imageService.loadImagesByUserId(+userId);
            this.documentService.loadDocumentsByUserId(+userId);
        }
    }

    selectTab(index: number) {
        this.selectedTab = index;
    }

    openImage(imageId: number, $event: any) {
        $event.stopPropagation();
        this.imageService.openImage(imageId);
    }

    editImage(imageId: number, $event: any) {
        $event.stopPropagation();
        this.imageService.editImage(imageId);
    }

    openDocument(documentId: number, $event: any) {
        $event.stopPropagation();
        this.documentService.openDocument(documentId);
    }

    editDocument(documentId: number, $event: any) {
        $event.stopPropagation();
        this.documentService.editDocument(documentId);
    }
}
