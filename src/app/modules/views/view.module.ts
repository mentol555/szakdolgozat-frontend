import { NgModule } from "@angular/core";
import { ImageViewComponent } from "./image-view/image-view.component";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { ImageService } from "../../core/services/image.service";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { ViewRoutingModule } from "./view-routing.module";

@NgModule({
    declarations: [
        ImageViewComponent,
        DocumentViewComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ViewRoutingModule,
    ],
    providers: [
        ImageService
    ]
})
export class ViewModule { }

