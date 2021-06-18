import { Component, OnInit } from '@angular/core';
import Notes from '../Notes';

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.scss'],
})
export class NotesDisplayComponent implements OnInit {
  notes: Notes[] = [];

  dataNotes: Notes[] = [
    {
      title: 'Notes',
      creationdate: new Date(
        'Wed Jun 16 2021 02:39:26 GMT+0530 (India Standard Time)'
      ),
      todos: ['New Things', 'Wow'],
      textContent: ['lorem IPusm', 'Created New Data'],
      color: '',
    },
    {
      title: 'Notes',
      creationdate: new Date(
        'Wed Jun 11 2021 02:39:26 GMT+0530 (India Standard Time)'
      ),
      todos: ['New Things', 'Wow'],
      textContent: ['lorem IPusm', 'Created New Data'],
      color: '#CF8BF3',
    },
    {
      title: 'Nice',
      creationdate: new Date(
        'Wed Jun 09 2021 02:39:26 GMT+0530 (India Standard Time)'
      ),
      todos: ['New Things', 'Wow'],
      textContent: ['Looks', 'Created New Data'],
      color: '#67B26F',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    // console.table(this.dataNotes);
    this.dataNotes.sort((a: any, b: any): any => {
      return a.creationdate > b.creationdate ? -1 : 1;
    });
    // console.table(this.dataNotes);
    this.notes = this.dataNotes;
  }
  log = (note: Notes) => {
    console.log(note);
  };
}
