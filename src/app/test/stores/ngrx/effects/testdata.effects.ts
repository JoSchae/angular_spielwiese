import { Injectable } from '@angular/core';
import { TestService } from 'src/app/test/services/test.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as testDataActions from '../actions/testdata.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TestDataEffects {

    constructor(private _testService: TestService, private _actions$: Actions) { }

    getAllTestData$ = createEffect(() => this._actions$.pipe(
        ofType(testDataActions.getAllTestData),
        switchMap(() => this._testService.getTestData().pipe(
            map(testData => testDataActions.getAllTestDataSuccess({ data: testData })),
            // catchError(err => of(err))
        ))
    ));
}
