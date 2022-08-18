import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    MenuComponent,
    MensagemComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    MensagemComponent,
    RodapeComponent
  ]
})
export class SharedModule { }
