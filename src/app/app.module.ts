import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TestViewModule } from './test-route/test-route.module';
import { FacadesModule } from './_facades/facades.module';
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
  ],
  providers: [
    interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
