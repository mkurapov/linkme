import { observable, computed, action } from 'mobx';
import { Link } from '../classes/Link';
import { LinkService } from '../services/link.service';
import {link} from "fs";


class LinkStore {
  
  private links: Link[];
  
  constructor(private linkService: LinkService)
  {
    
  }
  

  getAllLinks() {
    this.links = this.linkService.getAllLinks();
  }

  getLinksByTag(tagToFind: string): Promise<Link[]>
  {
    var filteredLinks = this.links.filter((link) => link.tags.includes(tagToFind));
    return Promise.resolve(filteredLinks);
  }
  


}
export default new LinkStore();
