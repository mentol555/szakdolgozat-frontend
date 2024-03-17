import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    isLoggedIn$ = this.authService.getIsLoggedIn();

    currentUser$ = this.authService.getCurrentUser();
    
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }
    
    ngOnInit(): void {
      this.authService.loadCurrentUser();
    }
    
    navigateTo(url: string) {
        this.router.navigate([url]);
    }
}
