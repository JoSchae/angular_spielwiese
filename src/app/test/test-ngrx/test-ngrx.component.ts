import { Component, OnInit } from '@angular/core';
import { ITestDataState } from '../stores/ngrx/states/testdata.state';
import { Store, select } from '@ngrx/store';
import { selectors } from '../stores/ngrx/states/testdata.state';
import * as testDataActions from '../stores/ngrx/actions/testdata.actions';
@Component({
  selector: 'tmp-test-ngrx',
  templateUrl: './test-ngrx.component.html',
  styleUrls: ['./test-ngrx.component.scss']
})
export class TestNgrxComponent implements OnInit {

    testData$ = this._store.pipe(select(selectors.selectAllTestData));

  constructor(private _store: Store<ITestDataState>) { }

  ngOnInit() {
      this._store.dispatch(testDataActions.getAllTestData());
  }

}