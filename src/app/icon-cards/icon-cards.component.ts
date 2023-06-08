import { Component, Input, OnInit } from '@angular/core';
import { ICONCARDS } from 'src/db-data-icon-cards';
import { IconCards } from '../model/icon-cards';

@Component({
  selector: 'app-icon-cards',
  templateUrl: './icon-cards.component.html',
  styleUrls: ['./icon-cards.component.less']
})
export class IconCardsComponent implements OnInit {

  @Input()
  iconCards!: IconCards;

  // constructor() {}

  ngOnInit() {}

}
