import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestNgrxComponent } from './test-ngrx/test-ngrx.component';
import { TestMobxComponent } from './test-mobx/test-mobx.component';


@NgModule({
  declarations: [
    TestNgrxComponent,
    TestMobxComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
  ]
})
export class TestModule { }
