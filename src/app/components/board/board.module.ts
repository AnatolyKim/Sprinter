import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Board } from './board.component';
import { CardModule } from '../card/card.module';

@NgModule({
  imports: [CommonModule, CardModule],
  declarations: [Board],
  exports: [Board],
})
export class BoardModule {}
