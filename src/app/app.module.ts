import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
// import { interceptors } from './_interceptors';
import { TestModule } from './test/test.module';
import { FacadesModule } from './_facades/facades.module';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
    declarations: [
        AppComponent,
        ChildComponentComponent,
        // TestComponent,
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
        TestModule,
        // Routing
        AppRoutingModule

    ],
    providers: [
        CookieService,
        // interceptors
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
