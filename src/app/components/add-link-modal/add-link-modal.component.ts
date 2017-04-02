import { Component, Input, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'add-link-modal',
  template: `<div class="add-link-modal" [hidden]="!open">
              <input [(ngModel)]="newLinkAddress" placeholder="Link Address">
              <div class="button" (click)="addLink()">confirm</div>
            </div>
          `,
  styleUrls: ['./add-link-modal.component.scss']
})

export class AddLinkModalComponent {

  private newLinkAddress: string;
  @Input() open = false;
  @Output() addLinkEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor(){}
  
  addLink()
  {
    //validate here
    if (this.newLinkAddress)
    {
      this.addLinkEvent.emit(this.newLinkAddress);
      this.newLinkAddress = '';
    }
  }
}
