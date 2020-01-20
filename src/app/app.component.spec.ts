import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { AppModule } from './app.module';

describe('AppComponent', () => {

    let spectator: SpectatorRouting<AppComponent>;
    const createComponent = createRoutingFactory({
        component: AppComponent,
        imports: [AppModule],
        declareComponent: false,
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
