import { Component, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';

import { LinkService } from '../../services/link.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {
  links: Link[];

  constructor(private linkService: LinkService){}

  getLinks(): void
  {
    this.linkService.getAllLinks().then(newLinks => this.links = newLinks);
  }

  ngOnInit(): void
  {
    this.getLinks();
  }
}
