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
        description: 'Image Editor description',
        href: 'img-editor'
    },
    {
        title: 'Document Editor',
        description: 'Document Editor description',
        href: 'doc-editor'
    }
  ]

  constructor(private router: Router) {}

  ngOnInit() {
  }

  openMode(modeContent?: ModeItemContent) {
    this.router.navigate([modeContent?.href]);
  }
}
