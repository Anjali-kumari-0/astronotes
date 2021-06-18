import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotecomponentComponent } from './notecomponent/notecomponent.component';



@NgModule({
  declarations: [

    NotecomponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotecomponentComponent
  ]
})
export class NoteModuleModule { }
