import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocEditorComponent } from './doc-editor.component';
import { DocEditorRoutingModule } from './doc-editor-routing.module';
import { NgxSummernoteModule } from 'ngx-summernote';


@NgModule({
  declarations: [
    DocEditorComponent
  ],
  imports: [
    CommonModule,
    DocEditorRoutingModule,
    NgxSummernoteModule 
  ]
})
export class DocEditorModule {
}
