import { Subscription } from 'rxjs';
import { ITask } from '../../common/interfaces'

export class Column {
  constructor(public name: string, public tasks: ITask[]) {}
}
