import { Component, ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
      <app-nav-bar></app-nav-bar>
      <app-side-bar></app-side-bar>
      <router-outlet></router-outlet>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {

  constructor(){
  }
}
