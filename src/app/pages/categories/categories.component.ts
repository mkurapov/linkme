import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { Link } from '../../classes/Link';

import { LinkService } from '../../services/link.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesPage implements OnInit {
  filteredLinks: Link[];
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

    this.linkService.getLinksByTag(tagToFind).then(newLinks => this.filteredLinks = newLinks);
    console.log(this);
  }

}
