import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'tmp-test-store',
    templateUrl: './test-store.component.html',
    styleUrls: ['./test-store.component.scss']
})
export class TestStoreComponent implements OnInit, OnChanges {

    @Input() theme: any;
    propertiesKeys = [];
    propertiesValues = [];

    constructor() { }

    ngOnInit() {


    }

    ngOnChanges() {
        if (this.theme) {
            Object.getOwnPropertyNames(this.theme.properties).forEach(
                key => {
                    this.propertiesKeys.push(key);
                    this.propertiesValues.push(this.theme[key]);
                }
            );
        }
    }

}
