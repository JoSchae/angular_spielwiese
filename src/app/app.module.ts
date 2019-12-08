import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './_store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './_store/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers } from './_store/reducers/meta.reducer';
import { CookieService } from 'ngx-cookie-service';
// import { interceptors } from './_interceptors';
import { UsersModule } from './users/users.module';
import { TestNgrxComponent } from './test/test-ngrx/test-ngrx.component';

@NgModule({
    declarations: [
        AppComponent,
        // TestComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(
            appReducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true
            }
        }
        ),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal, stateKey: 'router' }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        AppRoutingModule,
        // Service Worker
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        // Feature Modules
        UsersModule,

    ],
    providers: [
        CookieService,
        // interceptors
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
