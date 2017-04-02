import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as layoutReducers from '../../reducer/layout';
 
interface AppState {
  counter: number;
}


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

})

export class NavBarComponent {

  public showAddModal$;

  constructor(private store : Store<any>) {
    this.store.select('showAddModal').subscribe(showAddModal => 
      {
        this.showAddModal$ = showAddModal;
    })
  }

  openAddModal()
  {
    console.log(this.store);
    this.store.dispatch({type: layoutReducers.OPEN_ADD_MODAL});
  }

  closeAddModal()
  {
    
  }



}
