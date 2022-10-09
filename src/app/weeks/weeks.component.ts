import { Component } from '@angular/core';
import { getDateOfToday, getDayOfToday } from '../helpers';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.less']
})
export class WeeksComponent {
  day = getDayOfToday();
  today = getDateOfToday();
  weeks = [1,2,3,4,5,6,7];
}
