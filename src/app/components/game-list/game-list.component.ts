import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import {Game} from '../../models/game.model';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'gs-game-list',
    templateUrl: 'game-list.component.html'
})
export class GameListComponent implements OnInit {    
    games: Game[] = [];

    constructor(private gameSerice: GameService) { }

    ngOnInit() {
        this.gameSerice.getAll().subscribe(games=>{
            this.games = games;
        })
     }   
}