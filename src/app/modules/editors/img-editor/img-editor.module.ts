import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgEditorComponent } from './img-editor.component';
import { ImgEditorRoutingModule } from './img-editor-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ImageService } from '../../../core/services/image.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ImageEffects } from './store/effects/image.effects';
import { reducers } from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ImgEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ImgEditorRoutingModule,
    EffectsModule.forFeature([
        ImageEffects
    ]),
    StoreModule.forFeature('imageState', reducers)
  ],
  providers: [
    ImageService
  ]
})
export class ImgEditorModule {
}
