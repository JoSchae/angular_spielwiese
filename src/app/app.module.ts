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
// import { reducers, metaReducers } from './_store';
import { appReducers } from './_store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './_store/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TestStoreComponent } from './test-store/test-store.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    TestStoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // ThemesModule.forRoot({
    //     themes: [defaultTheme, mandantOneTheme],
    //     active: 'default'
    // }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
