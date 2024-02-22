import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgEditorComponent } from './img-editor.component';
import { ImgEditorRoutingModule } from './img-editor-routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ImgEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ImgEditorRoutingModule,
  ]
})
export class ImgEditorModule {
}
