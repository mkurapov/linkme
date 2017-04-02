import { Component, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';

@Component({
  selector: 'home',
  template: `<div class="page">
               <list-links [links]="links"></list-links>
            </div>`
  
})
export class HomePage {
  private links: Link[];
}
