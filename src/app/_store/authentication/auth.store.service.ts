import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil, shareReplay } from 'rxjs/operators';

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
    public readonly authentiationState$: Observable<IAuthenticationState>;

    private _destroy = new Subject<void>();

    constructor() {
        this._authenticationState = new BehaviorSubject<IAuthenticationState>(this._initialAuthenticationState);
        this._authenticationState.pipe(takeUntil(this._destroy)).subscribe(
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
        this.authentiationState$ = this._authenticationState.pipe(shareReplay(1));
    }

    ngOnDestroy(): void {
        this._destroy.next();
        this._destroy.complete();
    }

    public setAuthenticationState(auth: IAuthenticationState) {
        console.log('SET AUTHENTICATION STATE');
        this._authenticationState.next(auth);
    }
}
