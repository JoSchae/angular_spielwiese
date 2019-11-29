import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestNgrxComponent } from './test-ngrx/test-ngrx.component';
import { TestMobxComponent } from './test-mobx/test-mobx.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { testDataReducers } from './stores/ngrx/reducer/testdata.reducer';


@NgModule({
  declarations: [
    TestNgrxComponent,
    TestMobxComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    StoreModule.forFeature('data', testDataReducers),
    EffectsModule.forFeature([]),
    HttpClientModule,
  ]
})
export class TestModule { }
