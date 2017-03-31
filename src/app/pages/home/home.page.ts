import { Component, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';

import { ListLinksComponent } from '../../components/list-links/list-links.component';

import { LinkService } from '../../services/link.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
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
