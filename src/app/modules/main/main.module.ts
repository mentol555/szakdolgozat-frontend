import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { ModeItemComponent } from './mode-item/mode-item.component';

@NgModule({
    declarations: [
        MainComponent,
        ModeItemComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainRoutingModule,
    ]
})
export class MainModule { }

