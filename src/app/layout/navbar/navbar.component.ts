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
    
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }
    
    navigateTo(url: string) {
        this.router.navigate([url]);
    }
}
