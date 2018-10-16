import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../../contacts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  contacts = CONTACTS;

  constructor() { }

  ngOnInit() {
  }

}
