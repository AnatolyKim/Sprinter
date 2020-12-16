import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { ITask } from '../common/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataStorage {
  private cards = [
    { id: '1', status: 'Ideas', title: 'idea', description: 'desc', importance: 'imp', date: 'date' },
    { id: '2', status: 'Research', title: 'research', description: 'desc', importance: 'imp', date: 'date' },
    { id: '3', status: 'In progress', title: 'progess', description: 'desc', importance: 'imp', date: 'date' },
    { id: '4', status: 'Done', title: 'done item', description: 'desc', importance: 'imp', date: 'date' },
  ];
  private statuses = ['Ideas', 'Research', 'In progress', 'Done'];
  private tasks = new BehaviorSubject(this.cards);

  getStatusData() {
    return this.statuses;
  }

  getCardsData() {
    return this.tasks;
  }

  updateCardStatus(id: string, status: string) {
    const currentCard = this.cards.find((card) => card.id === id);

    currentCard.status = status;
    // console.log(this.cards);
  }

  createCard(data: ITask) {
    data.id = 'some';
    this.cards.push(data);
    this.tasks.next(this.cards);
  }

  updateCardData(data: ITask) {

  }

  deleteCard() {}
}
