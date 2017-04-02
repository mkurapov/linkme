import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';


import { Link } from '../../classes/Link';

import { LinkService } from '../../services/link.service';

@Component({
  selector: 'categories',
  template: `<div class="page">
              <list-links [links]="filteredLinks"></list-links>
            </div>`
})
export class CategoriesPage implements OnInit {

  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute,
    private location: Location
  ){}


  ngOnInit(): void
  {

   
  }

  showLinks(tagToFind: string): void
  {
   
  }

}
