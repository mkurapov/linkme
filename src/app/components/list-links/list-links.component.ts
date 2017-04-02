import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';

@Component({
  selector: 'list-links',
  template: `<div class="links" *ngFor="let link of links" >
            <single-link [link]="link"></single-link>
            </div>
          `,
  styleUrls: ['./list-links.component.scss']
})

export class ListLinksComponent {
  @Input() links: Link[];
}
