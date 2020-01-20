import { NgModule } from '@angular/core';
import { AuthenticationStore } from '../_stores/authentication/auth.store.service';
import { AuthenticationService } from '../_services/authentication/authentication.service';

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [
        AuthenticationStore,
        AuthenticationService
    ]
})
export class FacadesModule { }
