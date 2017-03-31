import { Component, Input } from '@angular/core';
import linkStore from '../../stores/linkStore';
import layoutStore from '../../stores/layoutStore';



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
  private linkStore = linkStore;
  private layoutStore = layoutStore;

  constructor(){}

  addLink()
  {
      this.linkStore.addLink(this.newLinkAddress);
      this.layoutStore.closeAddModal();
  }


}
