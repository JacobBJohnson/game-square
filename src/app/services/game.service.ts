import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import {Game} from '../models/game.model'

@Injectable()
export class GameService {
private serviceUrl = 'http://localhost:2700/gamesquare/api/games'
    constructor(private http: Http) { }

    getAll(): Observable<Game[]>{
        return this.http.get(this.serviceUrl)
        .map((response:Response) => <Game[]>response.json())
        .catch(this.handleError);
    };

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    };
}