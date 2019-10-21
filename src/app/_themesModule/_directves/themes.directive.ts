import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemesService } from '../_services/themes.service';
import { Theme } from 'src/assets/themes/symbols';

@Directive({
    selector: '[tmpThemes]'
})
export class ThemesDirective implements OnInit, OnDestroy {

    private _unsubscribe$ = new Subject<void>();

    constructor(
        private _elementRef: ElementRef,
        private _themesService: ThemesService
    ) { }

    ngOnInit() {
        const activeTheme = this._themesService.getActiveTheme();
        if (activeTheme) {
            this.updateTheme(activeTheme);
        }

        this._themesService.themeChange
            .pipe(
                takeUntil(this._unsubscribe$)
            )
            .subscribe(
                (theme: Theme) => this.updateTheme(theme)
            );
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

    updateTheme(theme: Theme) {
        // project properties onto the element
        for (const key in theme.properties) {
            if (theme.properties.hasOwnProperty(key)) {
                this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
            }
        }
        // remove old theme
        for (const name of this._themesService.theme) {
            if (this._themesService.theme.hasOwnProperty(name)) {
                this._elementRef.nativeElement.classList.remove(`${name}-theme`);
            }
        }
        // alias element with theme name
        this._elementRef.nativeElement.classList.add(`${theme.name}-theme`);
    }

}
