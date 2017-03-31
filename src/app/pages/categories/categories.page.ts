import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import linkStore from '../../stores/linkStore';


import { Link } from '../../classes/Link';

import { LinkService } from '../../services/link.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})
export class CategoriesPage implements OnInit {

  filteredLinks: Link[];
  private linkStore = linkStore;
  private sub: any;



  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute,
    private location: Location
  ){}


  ngOnInit(): void
  {

    this.sub = this.route.params.subscribe(params => {
      this.showLinks(params['tag']);
    });
  }

  showLinks(tagToFind: string): void
  {
    this.filteredLinks = this.linkStore.getLinksByTag(tagToFind);
  }

}
