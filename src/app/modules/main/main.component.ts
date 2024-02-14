import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ModeItemContent } from './mode-item/mode-item.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
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

  openMode(modeContent?: ModeItemContent) {
    console.log("ASD")
    this.router.navigate([modeContent?.href]);
  }
}
