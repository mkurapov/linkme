import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/let';


import { Store } from '@ngrx/store';
import * as rootReducer from '../../reducers/';

import { Link } from '../../classes/Link';


@Component({
  selector: 'categories',
  template: `<div class="page">
              <list-links [links]="filteredLinks$ | async"></list-links>
            </div>`
})
export class CategoriesPage implements OnInit {

  filteredLinks$: Observable<Link[]>;
  private filter: string;
  private sub: any;

  constructor(
    private store : Store<rootReducer.State>,
    private route: ActivatedRoute,
    private location: Location
  )
  {
    this.filteredLinks$ = store.select(rootReducer.getLinks);
  }


  ngOnInit(): void
  {
      this.sub = this.route.params.subscribe(params => {
            this.filter = params['tag']; 
            

          });
  }

  filterLinks(): void
  {
    console.log(this.filteredLinks$)
  }

}
