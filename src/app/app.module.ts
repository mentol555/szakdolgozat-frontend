import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptProviders } from './core/interceptors';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from "./layout/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        httpInterceptProviders
    ],
    bootstrap: [AppComponent],
    imports: [
        SharedModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ]
})
export class AppModule { }
