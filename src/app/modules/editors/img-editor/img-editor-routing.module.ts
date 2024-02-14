import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgEditorComponent } from './img-editor.component';

const routes: Routes = [
    { path: '', component: ImgEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgEditorRoutingModule { }