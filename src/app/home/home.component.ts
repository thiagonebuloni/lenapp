import { Component } from '@angular/core';
import { CARDS } from 'src/db-data';
import { ICONCARDS } from 'src/db-data-icon-cards';
import { LoginComponent } from '../login/login.component';
import { CreateAccountComponent } from '../create-account/create-account.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  card1 = CARDS[0];
  card2 = CARDS[1];
  card3 = CARDS[2];
  card4 = CARDS[3];
  iconCards1 = ICONCARDS[0];
  iconCards2 = ICONCARDS[1];
  iconCards3 = ICONCARDS[2];
  iconCards4 = ICONCARDS[3];
}
