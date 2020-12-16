import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModal } from './card-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardModal],
  exports: [CardModal],
})
export class CardModalModule {}
