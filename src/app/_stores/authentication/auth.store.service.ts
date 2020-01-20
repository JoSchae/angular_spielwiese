import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { takeUntil, shareReplay, catchError } from 'rxjs/operators';

export interface IAuthenticationState {
    token: string;
    isLoggedIn: boolean;
}

@Injectable()
export class AuthenticationStore implements OnDestroy {


    private readonly _initialAuthenticationState = {
        token: null,
        isLoggedIn: false
    } as IAuthenticationState;

    private readonly _authenticationState: BehaviorSubject<IAuthenticationState>;
    public readonly authenticationState$: Observable<IAuthenticationState>;

    private _destroy = new Subject<void>();

    constructor() {
        this._authenticationState = new BehaviorSubject<IAuthenticationState>(this._initialAuthenticationState);
        this._authenticationState.pipe(
            takeUntil(this._destroy),
            catchError(err => {
                if (err instanceof Error) {
                    return of(err);
                } else {
                    console.error('[AUTH] Encountered Error while getting new State. State is now default.')
                    return of({
                        token: null,
                        isLoggedIn: false
                    });
                }
            })
            )
        .subscribe(
            next => {
                console.debug('[AUTH] New State: ', next);
            },
            error => {
                console.error('[AUTH] Error: ', error);
            },
            () => {
                console.debug('[AUTH] Completed');
            }
        );
        this.authenticationState$ = this._authenticationState.pipe(shareReplay(1));
    }

    ngOnDestroy(): void {
        this._destroy.next();
        this._destroy.complete();
    }

    public setAuthenticationState(auth: IAuthenticationState) {
        const newState = this._authenticationState.getValue();
        Object.keys(auth).forEach(
            key => newState[key] = auth[key]
        );
        this._authenticationState.next(newState);
    }
}
