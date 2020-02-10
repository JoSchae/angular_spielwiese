import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TestViewModule } from './test-route/test-route.module';
import { FacadesModule } from './_facades/facades.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './_ngrx/reducers/app.reducer';
import { metaReducers } from './_ngrx/reducers/meta.reducer';
import { effects } from './_ngrx/effects';
import { interceptors } from './_interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Facades
    FacadesModule,
    // Service Worker
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // Feature Modules
    TestViewModule,
    // Routing
    AppRoutingModule,
    // Ngrx
    StoreModule.forRoot(
        appReducers, {
        metaReducers,
        runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
            strictStateSerializability: true,
            strictActionSerializability: true
        }
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal, stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
