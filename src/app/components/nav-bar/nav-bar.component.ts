import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as rootReducer from '../../reducers/';
import * as layoutActions from '../../actions/layout';
 


@Component({
  selector: 'app-nav-bar',
  template: `
        <nav>
        <div class="logo">
          linkme
        </div>
          <a routerLink="/home">Home</a>
          <a routerLink="/groups">Groups</a>
          <div class="button"  (click)="toggleAddModal()">add thing</div>
        </nav>
        <add-link-modal [open]="showAddModal$ | async"></add-link-modal>
        `,
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class NavBarComponent {

  showAddModal$: Observable<boolean>;

  constructor(private store : Store<rootReducer.State>) {
   this.showAddModal$ = store.select(rootReducer.getShowAddModal);
  }

  toggleAddModal()
  {
    this.store.dispatch({type: layoutActions.TOGGLE_ADD_MODAL})
  }
}
