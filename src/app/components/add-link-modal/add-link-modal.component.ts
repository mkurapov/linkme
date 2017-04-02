import { Component, Input } from '@angular/core';



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

  @Input() open = false;
  private newLinkAddress: string;

  constructor(){}

  addLink()
  {
  }


}
