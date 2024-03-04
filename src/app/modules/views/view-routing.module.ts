import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewComponent } from './image-view/image-view.component';
import { DocumentViewComponent } from './document-view/document-view.component';

const routes: Routes = [
    {
        path: 'image/:id', component: ImageViewComponent
    },
    {
        path: 'document/:id', component: DocumentViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }