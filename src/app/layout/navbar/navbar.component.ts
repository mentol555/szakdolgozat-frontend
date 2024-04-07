import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    isLoggedIn$ = this.authService.getIsLoggedIn();

    currentUser$ = this.authService.getCurrentUser().pipe(tap(user => {
        if(user.avatar) {
            this.avatar = "data:image/jpeg;base64," + user.avatar;
        }
    }));
    
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    avatar: string;
    
    ngOnInit(): void {
      this.authService.loadCurrentUser();
    }
    
    navigateTo(url: string) {
        this.router.navigate([url]);
    }
}
