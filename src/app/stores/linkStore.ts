import { observable, computed, action } from 'mobx';
import { Link } from '../classes/Link';
import { Injectable } from '@angular/core';
import { LINKS } from '../data/mock-data';

import { Observable } from 'rxjs/Observable';

@Injectable()
class LinkStore {

  @observable links: Link[];

  constructor()
  {
    this.links = LINKS;
  }


  getLinksByTag(tagToFind: string)
  {
    return this.links.filter((link) => link.tags.includes(tagToFind));
  }

  addLink(newLinkAddress: string)
  {
    var testLink = LINKS[0];
    testLink.address = newLinkAddress;

    this.links.push(testLink);
  }
}

export default new LinkStore();

