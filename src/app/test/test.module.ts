import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersContainerComponent } from './components/container/users/users-container.component';
import { UsersComponent } from './components/view/users/users.component';


@NgModule({
    declarations: [
        UsersContainerComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TestRoutingModule,
        HttpClientModule,
    ]
})
export class TestModule { }
