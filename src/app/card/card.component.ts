import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../../contacts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  contacts = CONTACTS;
  
  constructor() { }

  ngOnInit() {
  }

}
