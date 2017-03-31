import { Component, ChangeDetectionStrategy } from '@angular/core';
import layoutStore from '../../stores/layoutStore'


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavBarComponent {

  private layoutStore = layoutStore;

  constructor() {
  }

  openAddModal()
  {
    console.log(layoutStore);

    layoutStore.openAddModal();
  }

  closeAddModal()
  {
    layoutStore.closeAddModal();
  }



}
