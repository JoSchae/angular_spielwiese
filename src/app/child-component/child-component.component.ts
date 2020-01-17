import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
    selector: 'tmp-child-component',
    templateUrl: './child-component.component.html',
    styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

    @Output() buttonPressed = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    emitEvent($event) {
        console.log(event, event.srcElement, event.type)
    }

}
