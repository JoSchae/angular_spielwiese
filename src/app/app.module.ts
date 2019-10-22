import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ThemesModule } from './_themesModule/themes.module';
import { mandantOneTheme, defaultTheme } from 'src/assets/themes';
import { ChildComponentComponent } from './test/child-component/child-component.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './_store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './_store/effects/user.effects';
import { ConfigEffects } from './_store/effects/config.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ThemesModule.forRoot({
        themes: [defaultTheme, mandantOneTheme],
        active: 'default'
    }),
    // StoreModule
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Global Routing
    AppRoutingModule,
    // Service Worker
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
