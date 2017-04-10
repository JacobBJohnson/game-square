import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {Http, Response,Headers, RequestOptions, HttpModule} from '@angular/http'
import { AppComponent } from './app.component';

import {HeaderComponent} from './components/header/header.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {FullSearchComponent} from './components/full-search/full-search.component';

import {GameService} from './services/game.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FullSearchComponent,
    GameListComponent],
  providers:[
    GameService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
