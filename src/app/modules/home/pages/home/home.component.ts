import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import MediumEditor from 'medium-editor';
import { NotesService } from 'src/app/core/notes/notes.service';
import { AuthService } from 'src/app/core/auth/auth.service';

import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  editor: any;
  savedNote: any;

  @ViewChild('editable', { static: true }) editable: ElementRef;

  constructor(private notes: NotesService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(async user => {
      if (user && user.uid) {
        this.notes.readUserNote(user.uid).subscribe(data => {
          // Throttle auto save
          const throttledAutoSave = MediumEditor.util.throttle((evt) => {
            this.saveNote(evt.target.innerHTML, user.uid);
          }, 2000); // 2 second delay

          this.editor = new MediumEditor(this.editable.nativeElement, {
            delay: 1000,
            placeholder: {
              text: 'Start typing here...',
              hideOnClick: true
            }
          })
          .subscribe('editableInput', throttledAutoSave);

          if (data) {
            // Set editor content to saved content
            this.editor.setContent(data.note);
          }
        });
      }
    });
  }

  saveNote(data, userId) {
    this.notes.syncUserNote({
      data,
      userId
    });
  }

}
