import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';
import { timeSince } from '../../helpers/helpers';

@Component({
  selector: 'single-link',
  templateUrl: './single-link.component.html',
  styleUrls: ['./single-link.component.scss']
})

export class SingleLinkComponent {
  @Input() link: Link;

  private timeSincePosted: string;

  ngOnInit() {
      this.timeSincePosted = timeSince(this.link.dateAdded);
  }


}
