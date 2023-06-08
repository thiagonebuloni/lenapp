import { Component, Input, OnInit } from '@angular/core';
import { CARDS } from 'src/db-data';
import { Card } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  
  @Input()
  card!: Card;

  // constructor() {}

  ngOnInit() {}
}
