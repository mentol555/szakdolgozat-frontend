import { Component, Input } from '@angular/core';

export interface ModeItemContent {
    title: string,
    description: string,
    href: string
}

@Component({
  selector: 'app-mode-item',
  templateUrl: './mode-item.component.html',
  styleUrl: './mode-item.component.scss'
})
export class ModeItemComponent {
    @Input() modeContent: ModeItemContent;

    constructor() {}
}
