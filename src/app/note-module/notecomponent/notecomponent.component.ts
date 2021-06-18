import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notecomponent',
  templateUrl: './notecomponent.component.html',
  styleUrls: ['./notecomponent.component.scss'],
})
export class NotecomponentComponent implements OnInit {
  @Input() color?: string;
  @Input() title?: string;
  @Input() content?: string;
  backcolor?:string
  constructor() {}

  ngOnInit(): void {
    this.backcolor = `linear-gradient(to right, ${this.color},#ff5f6d)`;
    console.log(this.backcolor)
  }

}
