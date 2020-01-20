import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'tmp-login-view',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {

    @Input() isLoggedIn: boolean;
    @Output() buttonEmitter = new EventEmitter<any>();

    emitButtonPress(event: string) {
        this.buttonEmitter.emit(event);
    }

}
