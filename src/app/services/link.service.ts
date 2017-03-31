import { Injectable } from '@angular/core';
import { Link } from '../classes/Link';
import { LINKS } from '../data/mock-data';

@Injectable()
export class LinkService {

  private links: Link[];

  constructor()
  {
    this.links = LINKS;
  }

  getAllLinks(): Promise<Link[]> {
    return Promise.resolve(this.links);
  }

  getLinksByTag(tagToFind: string): Promise<Link[]>
  {
    var filteredLinks = this.links.filter((link) => link.tags.includes(tagToFind));
    return Promise.resolve(filteredLinks);
  }
}
