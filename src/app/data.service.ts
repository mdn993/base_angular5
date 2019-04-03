import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()

export class DataService {

  private goals =
    new BehaviorSubject<any>(['Learning Angular 7 for beginner', 'Learn Laravel 5.8 scratch courses', 'Ionic 4 courses for beginner']);
  goal = this.goals.asObservable();

  constructor() {
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
