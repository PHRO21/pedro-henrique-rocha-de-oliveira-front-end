import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [MensagemComponent],
  imports: [CommonModule, RouterModule, MatDialogModule],
  exports: [MensagemComponent],
})
export class MensagemModule {}
