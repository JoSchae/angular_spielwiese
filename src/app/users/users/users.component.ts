import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IUsersState } from '../store/states/users.state';
import * as UsersActions from '../store/actions/users.actions';
import * as UserSelectors from '../store/selectors/users.selectors';

@Component({
    selector: 'tmp-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users$ = this._store.pipe(select(UserSelectors.selectUsers));

    constructor(private _store: Store<IUsersState>) { }

    ngOnInit() {
        this._store.dispatch(UsersActions.getUsers());
    }

}
