import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { NavbarComponent } from '../layout/navbar/navbar.component';


@NgModule( {
    declarations: [
        NavbarComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        MaterialModule,
        NavbarComponent
    ]
} )

export class SharedModule { }