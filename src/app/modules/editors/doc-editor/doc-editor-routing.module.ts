import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocEditorComponent } from './doc-editor.component';

const routes: Routes = [
    { path: '', component: DocEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocEditorRoutingModule { }