import { Injectable } from '@angular/core';
import { Link } from '../link';
import { LINKS } from '../data/mock-data';

@Injectable()
export class LinkService {
  getLinks(): Promise<Link[]> {
    return Promise.resolve(LINKS);
  }
}
