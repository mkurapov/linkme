import { Component, OnInit } from '@angular/core';
import linkStore from '../../stores/linkStore'

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  private linkStore = linkStore;

}
