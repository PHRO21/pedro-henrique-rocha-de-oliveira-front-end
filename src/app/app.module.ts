import { HomeModule } from './components/home/home.module';
import { MenuModule } from './shared/menu/menu.module';
import { RodapeModule } from './shared/rodape/rodape.module';
import { MensagemModule } from './shared/mensagem/mensagem.module';
import { AutorModule } from './components/autor/autor.module';
import { LivroModule } from './components/livro/livro.module';
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
    LivroModule,
    AutorModule,
    MensagemModule,
    RodapeModule,
    MenuModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
