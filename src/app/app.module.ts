import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TestViewModule } from './test-view/test-view.module';
import { FacadesModule } from './_facades/facades.module';
import { ChildComponentComponent } from './AppComponent/child-component/child-component.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
