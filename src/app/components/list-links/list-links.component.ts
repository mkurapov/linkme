import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';

@Component({
  selector: 'list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss']
})

export class ListLinksComponent {
  @Input() links: Link[];
}
