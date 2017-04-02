import { Component, Input, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'add-link-modal',
  template: `<div class="add-link-modal" [hidden]="!open">
              <input [(ngModel)]="newLinkAddress" placeholder="Link Address">
              <div class="button" (click)="addLinkEvent.emit(newLinkAddress)">confirm</div>
            </div>
          `,
  styleUrls: ['./add-link-modal.component.scss']
})

export class AddLinkModalComponent {

  @Input() open = false;
  @Output() addLinkEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor(){}



}
