import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'gs-full-search',
    templateUrl: 'full-search.component.html'
})
export class FullSearchComponent implements OnInit {
    @Input() searchOpen: boolean;
    @Output() onCloseSearchMode = new EventEmitter();
    searchbar: any;
    playAnim: boolean = false;

    constructor() { }

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

    ngOnInit() {
        setTimeout(() => {
            this.playAnim = true;
            $('#searchbar').focus();
        })
    }


}