import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ImageService } from '../../core/services/image.service';
import { EffectsModule } from '@ngrx/effects';
import { ImageEffects } from '../editors/img-editor/store/effects/image.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../editors/img-editor/store/reducers';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProfileRoutingModule,
        EffectsModule.forFeature([
            ImageEffects
        ]),
        StoreModule.forFeature('imageState', reducers)
    ],
    providers: [
        ImageService
    ]
})
export class ProfileModule { }
