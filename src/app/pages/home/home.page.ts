import { Component, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as rootReducer from '../../reducers/';

@Component({
  selector: 'home',
  template: `<div class="page">
               <list-links [links]="links$ | async"></list-links>
            </div>`
  
})
export class HomePage {
  links$: Observable<Link[]>;

  constructor(store : Store<rootReducer.State>) {
   this.links$ = store.select(rootReducer.getLinks);
  }
}
