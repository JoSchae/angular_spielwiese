import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../_store/state/app.state';
import { selectSelectedTheme } from '../_store/selectors/theme.selector';
import { GetTheme } from '../_store/actions/theme.actions';
import { ITheme } from '../_models/theme';

@Component({
    selector: 'tmp-test-store',
    templateUrl: './test-store.component.html',
    styleUrls: ['./test-store.component.scss']
})
export class TestStoreComponent implements OnInit, OnChanges {

    // theme$ = this._store.pipe(select(selectSelectedTheme));
    @Input() theme: ITheme;

    constructor(private _store: Store<IAppState>) { }

    ngOnInit() {
        // this._store.dispatch(new GetTheme('default'));

    }

    ngOnChanges() {

    }

}
