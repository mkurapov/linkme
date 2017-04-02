import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


import { Store } from '@ngrx/store';
import * as rootReducer from '../../reducers/';

import { Link } from '../../classes/Link';


@Component({
  selector: 'categories',
  template: `<div class="page">
              <list-links [links]="filteredLinks$ | async"></list-links>
            </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
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
     this.sub = this.route.params.subscribe(params => {
            this.filter = params['tag']; 
            this.filteredLinks$ = this.store.select(rootReducer.getLinks).map(list => list.filter(l => l.tags.includes(this.filter)));
          });

  }


  ngOnInit(): void
  {
    
  }


}
