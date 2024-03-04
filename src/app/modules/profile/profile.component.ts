import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

    selectedTab = 1;

    ngOnInit() {
    }

    selectTab(index: number) {
        this.selectedTab = index;
    }
}
