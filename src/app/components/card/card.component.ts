import { Column } from '../column/column.component';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class Card implements OnInit {
  @Input('data') data: any;
  public model: any;

  ngOnInit(): void {
    this.model = {
      id: this.data.id,
      status: this.data.status,
      title: this.data.title,
      description: this.data.description,
    };
  }
}
