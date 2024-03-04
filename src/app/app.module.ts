import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptProviders } from './core/interceptors';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApiService } from './core/services/api.service';
import { AuthService } from './core/services/auth.service';
import { CommonModule } from '@angular/common';
import { AppEffects } from './store/effects/app.effects';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        ApiService,
        AuthService,
        httpInterceptProviders
    ],
    bootstrap: [AppComponent],
    imports: [
        SharedModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-center'
        }),
        AppRoutingModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
              strictActionImmutability: true,
              strictActionSerializability: true,
              strictStateImmutability: true,
              strictStateSerializability: true
            }
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
        EffectsModule.forRoot([AppEffects])
    ]
})
export class AppModule { }
