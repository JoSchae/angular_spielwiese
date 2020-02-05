import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tmp-login-ngrx-view',
  templateUrl: './login-ngrx-view.component.html',
  styleUrls: ['./login-ngrx-view.component.scss']
})
export class LoginNGRXViewComponent {

    @Input() isLoggedIn: boolean;
    @Output() buttonEmitter = new EventEmitter<any>();

    emitButtonPress(event: string) {
        this.buttonEmitter.emit(event);
    }

}
