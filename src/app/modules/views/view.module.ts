import { NgModule } from "@angular/core";
import { ImageViewComponent } from "./image-view/image-view.component";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { ImageService } from "../../core/services/image.service";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ViewRoutingModule } from "./view-routing.module";
import { DocumentService } from "../../core/services/document.service";
import { CommentService } from "../../core/services/comment.service";
import { MaterialModule } from "../../shared/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { DocumentEffects } from "../editors/doc-editor/store/effects/document.effects";
import { ImageEffects } from "../editors/img-editor/store/effects/image.effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";

@NgModule({
    declarations: [
        ImageViewComponent,
        DocumentViewComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ViewRoutingModule,
        EffectsModule.forFeature([
            DocumentEffects,
            ImageEffects
        ]),
        StoreModule.forFeature('viewState', reducers)
    ],
    providers: [
        ImageService,
        DocumentService,
        CommentService
    ]
})
export class ViewModule { }

