import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  editor: any;

  @ViewChild('editable', { static: true }) editable: ElementRef;

  constructor() { }

  ngOnInit() {
    this.editor = new MediumEditor(this.editable.nativeElement, {
      delay: 1000,
      placeholder: {
        text: 'Start typing here...',
        hideOnClick: true
      }
    }).subscribe('editableKeyup', (evt) => {
      console.log({ html: evt.target.innerHTML });
    });
  }

}
