import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainViewComponent } from './main-view.component';
import { BoardModule } from 'src/app/components/board/board.module';
import { CommonModule } from '@angular/common';
import { CardModal } from 'src/app/components/card-modal/card-modal.component';

@NgModule({
  imports: [CommonModule, BoardModule, CardModal],
  declarations: [MainViewComponent],
})
export class MainViewModule {}
