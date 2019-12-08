import { Component, OnInit } from '@angular/core';
import { ITestDataState } from '../stores/ngrx/states/testdata.state';
import { Store, select } from '@ngrx/store';
import { selectors, selectTestDataById } from '../stores/ngrx/reducer/testdata.reducer';
import * as testDataActions from '../stores/ngrx/actions/testdata.actions';
@Component({
    selector: 'tmp-test-ngrx',
    templateUrl: './test-ngrx.component.html',
    styleUrls: ['./test-ngrx.component.scss']
})
export class TestNgrxComponent implements OnInit {

    testData$ = this._store.pipe(select(selectors.selectAllTestData));
    specifiData$ = this._store.pipe(select(
        selectors.selectSpecificTestData
    ));
    testDataById = this._store.pipe(select(selectTestDataById, 0));

    constructor(private _store: Store<ITestDataState>) { }

    ngOnInit() {
        this._store.dispatch(testDataActions.getAllTestData());
        this.testData$.subscribe(
            val => this._store.dispatch(testDataActions.setSpecificTestData({specificData: val[0]}))
        );
    }

}
