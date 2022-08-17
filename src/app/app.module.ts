import { SharedModule } from './shared/shared/shared.module';
import { AutorModule } from './autor/autor.module';
import { LivroModule } from './livro/livro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    LivroModule,
    AutorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
