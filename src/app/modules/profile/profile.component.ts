import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../core/services/image.service';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

    selectedTab = 1;

    images$ = this.imageService.getImagesByUserId();

    constructor(private imageService: ImageService, private authService: AuthService) {}

    ngOnInit() {
        const userId = this.authService.getUserId();
        if(userId) {
            this.imageService.loadImagesByUserId(+userId);
        }
    }

    selectTab(index: number) {
        this.selectedTab = index;
    }
}
