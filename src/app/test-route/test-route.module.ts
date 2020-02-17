import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TestViewRoutingModule } from './test-route-routing.module';
import { TestViewRootComponent } from './test-view-root/test-view-root.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FacadesModule } from '../_facades/facades.module';
import { AuthenticationFacade } from '../_facades/authentication/authentication.facade';
import { LoginNGRXViewComponent } from './child-components/loginNGRX/_view/login-ngrx-view/login-ngrx-view.component';
import { LoginNGRXComponent } from './child-components/loginNGRX/loginNGRX.component';

@NgModule({
    declarations: [
        TestViewRootComponent,
        LoginNGRXComponent,
        LoginNGRXViewComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        FacadesModule,
        TestViewRoutingModule,
        HttpClientModule
    ],
    providers: [
        AuthenticationFacade
    ]
})
export class TestViewModule { }
