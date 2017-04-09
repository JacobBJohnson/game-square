import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {Http, Response,Headers, RequestOptions, HttpModule} from '@angular/http'
import { AppComponent } from './app.component';

import {HeaderComponent} from './components/header/header.component';
//import {KoiFullSearchComponent} from './components/full-search/koi-full-search.component';

//import {AppDataService} from './services/app.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [AppComponent,HeaderComponent],
  providers:[],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
