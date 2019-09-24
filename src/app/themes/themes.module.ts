import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesDirective } from './themes.directive';
import { ThemeOptions, THEMES, ACTIVE_THEME } from 'src/assets/themes/symbols';



@NgModule({
    declarations: [ThemesDirective],
    imports: [CommonModule],
    exports: [ThemesDirective]
})
export class ThemesModule {
    static forRoot(options: ThemeOptions): ModuleWithProviders {
        return {
            ngModule: ThemesModule,
            providers: [
                {
                    provide: THEMES,
                    useValue: options.themes
                },
                {
                    provide: ACTIVE_THEME,
                    useValue: options.active
                }
            ]
        };
    }
}
