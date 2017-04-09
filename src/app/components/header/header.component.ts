import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gs-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    @Output() onFullSearchMode = new EventEmitter();
    @Input() searchOpen: boolean;
    constructor() { }

    ngOnInit() { }

    openSearch() {        
        this.onFullSearchMode.emit();
    }
}