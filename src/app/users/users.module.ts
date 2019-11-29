import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/reducers/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';
import { UserComponent } from './users/user/user.component';


@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        StoreModule.forFeature('users', usersReducer),
        EffectsModule.forFeature([UsersEffects])
    ]
})
export class UsersModule { }
