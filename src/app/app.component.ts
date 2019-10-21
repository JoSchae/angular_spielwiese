import { Component, OnInit } from '@angular/core';
import { ThemesService } from './_themesModule/_services/themes.service';
import { interval } from 'rxjs';


@Component({
    selector: 'tmp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'template-app';

    constructor(private themesService: ThemesService) { }

    ngOnInit() {
        interval(10000).subscribe(
            () => {
                const test = this.themesService.getActiveTheme();
                if (test.name === 'default') {
                    this.themesService.setTheme('mandantOne');
                } else {
                    this.themesService.setTheme('default');
                }
            }
        );
    }

}
