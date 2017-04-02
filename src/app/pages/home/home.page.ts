import { Component, OnInit } from '@angular/core';
import { Link } from '../../classes/Link';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  private links: Link[];
}
