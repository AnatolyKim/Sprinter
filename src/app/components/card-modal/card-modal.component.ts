import { EventEmitter, Input, Output } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataStorage } from '../../services/dataStorage';
import { IMPORTANCE_RATES } from '../../common/constants';
import { ITask, IImportanceRates } from '../../common/interfaces';


@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModal implements OnInit {
  public model: ITask;
  public taskForm: FormGroup;
  public importanceRates: IImportanceRates;
  
  @Input('isOpen') isOpen: boolean;
  @Input('status') status: string;
  @ViewChild('modal') modal: ElementRef;
  @Output() modalClosed = new EventEmitter<object>();

  constructor(
    private formBuilder: FormBuilder,
    private dataStorage: DataStorage
  ) {}

  ngOnInit(): void {
    this.importanceRates = IMPORTANCE_RATES;
    // this.model = {
    //   id: s
    //   status: string;
    //   title: string;
    //   description: string;
    //   importance: string;
    //   date: string;

    // };

    this.taskForm = this.formBuilder.group({
      title: '',
      description: '',
      importance: '',
      date: ''
    });
  }

  public close() {
    this.modal.nativeElement.classList.remove('is-active');
    this.modalClosed.emit({
      isOpen: false
    });
  }

  onSubmit(data: ITask) {
    data.status = this.status;
    // this.model = this.cartService.clearCart();
    this.dataStorage.createCard(data);
    console.log(data);
    this.taskForm.reset();
  }
}
