import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConfigService } from 'src/app/_services/config/config.service';
import { GetConfig, EConfigActions, GetConfigSuccess } from '../actions/config.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IConfig } from 'src/app/_models/config.interface';

@Injectable()
export class ConfigEffects {

    constructor(private _configService: ConfigService, private _actions$: Actions) { }

    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );
}
