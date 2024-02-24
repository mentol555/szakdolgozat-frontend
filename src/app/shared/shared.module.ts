import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { CommonModule } from '@angular/common';


@NgModule( {
    declarations: [
        NavbarComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        MaterialModule,
        NavbarComponent
    ]
} )

export class SharedModule { }