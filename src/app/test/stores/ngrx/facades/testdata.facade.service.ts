import { Injectable } from '@angular/core';
import { ITestDataState } from '../states/testdata.state';
import { Store, select } from '@ngrx/store';
import * as fromTestDataActions from '../actions/testdata.actions';
import { selectors } from '../reducer/testdata.reducer';
import { ITestData } from 'src/app/test/services/test.service';
import { Observable } from 'rxjs';

@Injectable()
export class TestDataFacade {

    // allTestData$ = this._store.pipe(select(selectors.selectAllTestData));
    // specificTestData$ = this._store.pipe(select(selectors.selectSpecificTestData));

    // public facadeSelectors = [
    //     this.selectAllTestData,
    //     this.selectSpecificTestData
    // ];

    constructor(private _store: Store<ITestDataState>) { }

    // DISPATCHERS

    GETAllTestData() {
        this._store.dispatch(fromTestDataActions.GETAllTestData());
    }

    setSpecificTestData(specificData: ITestData) {
        this._store.dispatch(fromTestDataActions.setSpecificTestData({ specificData }));
    }

    // SELECTORS

    selectAllTestData(): Observable<ITestData[]> {
        return this._store.pipe(select(selectors.selectAllTestData));
    }

    selectSpecificTestData(): Observable<ITestData> {
        return this._store.pipe(select(selectors.selectSpecificTestData));
    }

    selectTestDataById(id: number): Observable<ITestData> {
        return this._store.pipe(select(selectors.selectTestDataById, id));
    }



}

