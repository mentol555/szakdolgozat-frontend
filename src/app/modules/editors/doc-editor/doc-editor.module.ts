import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocEditorComponent } from './doc-editor.component';
import { DocEditorRoutingModule } from './doc-editor-routing.module';
import { NgxSummernoteModule } from 'ngx-summernote';
import { EffectsModule } from '@ngrx/effects';
import { DocumentEffects } from './store/effects/document.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { DocumentService } from '../../../core/services/document.service';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DocEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocEditorRoutingModule,
    NgxSummernoteModule,
    EffectsModule.forFeature([
        DocumentEffects
    ]),
    StoreModule.forFeature('documentState', reducers)
  ],
  providers: [
    DocumentService
  ]
})
export class DocEditorModule {
}
