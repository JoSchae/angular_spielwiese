import { Injectable } from '@angular/core';
import { ITestDataState } from '../states/testdata.state';
import { Store, select } from '@ngrx/store';
import * as fromTestDataActions from '../actions/testdata.actions';
import { selectors } from '../reducer/testdata.reducer';
import { ITestData } from 'src/app/test/services/test.service';
import { Observable } from 'rxjs';
import { TestDataFacade } from './testdata.facade';

@Injectable()
export class TestDataFacadeImpl implements TestDataFacade {

    constructor(private _store: Store<ITestDataState>) { }

    // DISPATCHERS

    GETAllTestData(): void {
        this._store.dispatch(fromTestDataActions.GETAllTestData());
    }

    setSpecificTestData(specificData: ITestData): void {
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

