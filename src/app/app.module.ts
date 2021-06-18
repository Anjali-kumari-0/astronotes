import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesDisplayComponent } from './notes-display/notes-display.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { FabComponent } from './fab/fab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoteModuleModule } from './note-module/note-module.module';
@NgModule({
  declarations: [AppComponent, NavbarComponent, NotesDisplayComponent,FabComponent,],
  imports: [BrowserModule, AppRoutingModule, NgxMasonryModule, BrowserAnimationsModule,MatButtonModule,MatSidenavModule,NoteModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
