import { Column } from '../column/column.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataStorage } from 'src/app/services/dataStorage';
import { ITask } from '@app/common/interfaces';
import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class Board implements OnInit {
  public model: any;
  private columns: any = [];

  @Output() modalOpened = new EventEmitter<object>();

  constructor(private dataStorage: DataStorage) {}

  ngOnInit(): void {
    this.model = {
      name: 'Test Board',
      statuses: this.dataStorage.getStatusData(),
      columns: of(this.columns)
    };

    this.dataStorage.getCardsData().subscribe(data => {
      this.fillBoard(this.dataStorage.getStatusData(), data);
    });
    console.log(this.model.columns);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.dataStorage.updateCardStatus(
		// @ts-ignore
        event.container.data[event.currentIndex].id,
        $(event.container.element.nativeElement).attr('name')
      );
    }
  }

  getCardsByStatus(status: string, tasks: ITask[]) {
    return tasks.filter((card) => card.status === status);
  }

  addColumn(status: string, tasks: ITask[]) {
    return new Column(status, this.getCardsByStatus(status, tasks));
  }

  fillBoard(statuses: string[], tasks: ITask[]) {
    this.columns.splice(0, this.columns.length);
    statuses.forEach((status) => {
      this.columns.push(this.addColumn(status, tasks));
    });
  }

  openModal(event: any) {
    this.modalOpened.emit({
      isOpen: true,
      status: event.target.name
    });
  }
}
