import { Component } from '@angular/core';
import { CARDS } from '../db-data';
import { ICONCARDS } from 'src/db-data-icon-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  card1 = CARDS[0];
  card2 = CARDS[1];
  card3 = CARDS[2];
  card4 = CARDS[3];
  iconCards1 = ICONCARDS[0];
  iconCards2 = ICONCARDS[1];
  iconCards3 = ICONCARDS[2];
  iconCards4 = ICONCARDS[3];
}
