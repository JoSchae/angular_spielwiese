import { NgModule } from '@angular/core';
import { AuthenticationStore } from '../_store/authentication/auth.store.service';
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
