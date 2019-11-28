import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { IAppState } from '../_store/state/app.state';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

//     constructor(private _store: Store<IAppState>) { }

//     intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
//         return handler.handle(request).pipe(
//             catchError((error: HttpErrorResponse) => {
//                 this._store.dispatch(errorActions.addError(error.error));
//                 return throwError(error);
//             })
//         );
//     }
// }
