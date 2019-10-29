import { Directive, ElementRef, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemesService } from '../_services/themes.service';
import { Theme } from 'src/assets/themes/symbols';
import { IAppState } from 'src/app/_store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectSelectedTheme } from 'src/app/_store/selectors/theme.selector';
import { themeReducers } from 'src/app/_store/reducers/theme.reducer';

@Directive({
    selector: '[tmpThemes]'
})
export class ThemesDirective implements OnInit, OnDestroy {

    @HostBinding('class.theme') theme = 'default';

    private _unsubscribe$ = new Subject<void>();
    private _selectedTheme$ = this._store.pipe(select(selectSelectedTheme));

    constructor(
        private _store: Store<IAppState>
    ) { }

    ngOnInit() {
        this._selectedTheme$.subscribe(
            selectedTheme => this.theme = selectedTheme.name
        );
    }

    ngOnDestroy() {
        // this._unsubscribe$.next();
        // this._unsubscribe$.complete();
    }

    updateTheme(theme: Theme) {

        //remove old properties
        // for (const key in theme.properties) {
        //     if (theme.properties.hasOwnProperty(key)) {
        //         this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
        //     }
        // }
        // project properties onto the element
        for (const key in theme.properties) {
            if (this._elementRef.nativeElement.style.get(key)) {
                this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
            }
        }
        // remove old theme
        // for (const name of this._themesService.theme) {
        //     if (this._themesService.theme.hasOwnProperty(name)) {
        //         this._elementRef.nativeElement.classList.remove(`${name}-theme`);
        //     }
        // }
        // alias element with theme name
        this._elementRef.nativeElement.classList.add(`${theme.name}-theme`);
    }

}
