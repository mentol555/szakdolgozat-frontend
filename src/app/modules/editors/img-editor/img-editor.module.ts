import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgEditorComponent } from './img-editor.component';
import { ImgEditorRoutingModule } from './img-editor-routing.module';


@NgModule({
  declarations: [
    ImgEditorComponent
  ],
  imports: [
    CommonModule,
    ImgEditorRoutingModule,
  ]
})
export class ImgEditorModule {
}
