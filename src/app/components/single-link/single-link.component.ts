import { Component, Input } from '@angular/core';
import { Link } from '../../classes/Link';

@Component({
  selector: 'single-link',
  templateUrl: './single-link.component.html',
  styleUrls: ['./single-link.component.scss']
})

export class SingleLinkComponent {
  @Input() link: Link;
}
