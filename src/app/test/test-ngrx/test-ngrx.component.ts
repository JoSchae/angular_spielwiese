import { Component, OnInit } from '@angular/core';
import { TestDataFacade } from '../stores/ngrx';

@Component({
    selector: 'tmp-test-ngrx',
    templateUrl: './test-ngrx.component.html',
    styleUrls: ['./test-ngrx.component.scss']
})
export class TestNgrxComponent implements OnInit {

    testData$ = this._testDataFacade.selectAllTestData();
    specificData$ = this._testDataFacade.selectSpecificTestData();
    testDataById$ = this._testDataFacade.selectTestDataById(0);

    constructor(private _testDataFacade: TestDataFacade) { }

    ngOnInit() {
        this._testDataFacade.GETAllTestData();
        this.testData$.subscribe(
            val => this._testDataFacade.setSpecificTestData(val[0])
        );
    }

}
