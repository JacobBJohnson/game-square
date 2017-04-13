import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import {Game} from '../../models/game.model';
import {GameService} from '../../services/game.service';

var _ = require('lodash');

@Component({
    selector: 'gs-full-search',
    templateUrl: 'full-search.component.html'
})
export class FullSearchComponent implements OnInit {
    @Input() searchOpen: boolean;
    @Output() onCloseSearchMode = new EventEmitter();    
    searchbar: any;
    playAnim: boolean = false;
    games: Game[] = [];
    filteredGames: Game[] = [];
    filter: string;

    constructor(private gameSerice: GameService) { }

    closeSearch() {
        this.onCloseSearchMode.emit();
    }

    //      ngOnChanges(changes: SimpleChanges) {
    //         if(changes['searchOpen'].currentValue){
    //             setTimeout(() => {
    //           this.playAnim = true;
    //             $('#searchbar').focus();  
    //         })            
    //         }else{
    //             this.playAnim = false;
    //         }    
    //   } 

    getList(){
        this.gameSerice.getAll().subscribe(games=>{
            this.games = games;
        })
    }  

    filterGameList(search:string){
        if(search){
        this.filteredGames= _.filter(this.games, (game: Game) =>{
            return game.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
        }
        else{
            this.filteredGames = [];
        }      
    }

    ngOnInit() {
        this.getList();
        setTimeout(() => {
            this.playAnim = true;
            $('#searchbar').focus();
        })
    }


}