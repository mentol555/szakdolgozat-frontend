import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ImageService } from '../../core/services/image.service';
import { EffectsModule } from '@ngrx/effects';
import { ImageEffects } from '../editors/img-editor/store/effects/image.effects';
import { StoreModule } from '@ngrx/store';
import { DocumentService } from '../../core/services/document.service';
import { DocumentEffects } from '../editors/doc-editor/store/effects/document.effects';
import { reducers } from './store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        EffectsModule.forFeature([
            DocumentEffects,
            ImageEffects
        ]),
        StoreModule.forFeature('profileState', reducers)
    ],
    providers: [
        ImageService,
        DocumentService
    ]
})
export class ProfileModule { }
