import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ModeItemContent } from './mode-item/mode-item.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  modeContents: ModeItemContent[] = [
    {
        title: 'Image Editor',
        description: 'Here you can edit your images however you like',
        href: 'img-editor',
        color: 'rgb(122, 206, 234, 0.7)'
    },
    {
        title: 'Document Editor',
        description: 'By clicking here you can access the document editor',
        href: 'doc-editor',
        color: 'rgba(208, 208, 18, 0.84)'
    }
  ]

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    localStorage.getItem('token') ? this.authService.isLoggedIn = true : this.authService.isLoggedIn = false;
  }

  openMode(modeContent?: ModeItemContent) {
    this.router.navigate([modeContent?.href]);
  }
}
