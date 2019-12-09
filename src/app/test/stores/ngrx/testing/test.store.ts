import { BehaviorSubject, Observable } from 'rxjs';

export class TestNgrxStore<T> {
    private state: BehaviorSubject<T> = new BehaviorSubject(undefined);

    setState(data: T) {
        this.state.next(data);
    }

    pipe(selector?: any): Observable<T> {
        return this.state.asObservable();
    }

    dispatch(action: any) { }
}
