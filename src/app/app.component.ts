import { Component, OnInit } from '@angular/core';

require('./styles/game-square/game-square.scss');
require('font-awesome/css/font-awesome.css');

@Component({
  selector: 'game-square',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  fullSearch: boolean = false;
  
  constructor() { }

  onFullSearchMode() {
    this.fullSearch = true;
  };

  onCloseSearchMode() {
    this.fullSearch = false;
  };

  ngOnInit() {}

}
