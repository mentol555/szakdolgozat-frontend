import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule
  ]
})
export class MainModule { }

