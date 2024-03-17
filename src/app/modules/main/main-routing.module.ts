import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    { 
        path: '', 
        component: MainComponent, 
    },
    {
        path: 'img-editor', loadChildren: () => import('../editors/img-editor/img-editor.module').then(m => m.ImgEditorModule)
    },
    {
        path: 'img-editor/:id', loadChildren: () => import('../editors/img-editor/img-editor.module').then(m => m.ImgEditorModule)
    },
    {
        path: 'doc-editor', loadChildren: () => import('../editors/doc-editor/doc-editor.module').then(m => m.DocEditorModule)
    },
    {
        path: 'doc-editor/:id', loadChildren: () => import('../editors/doc-editor/doc-editor.module').then(m => m.DocEditorModule)
    },
    {
        path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }