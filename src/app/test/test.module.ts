import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestNgrxComponent } from './test-ngrx/test-ngrx.component';
import { TestMobxComponent } from './test-mobx/test-mobx.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { testDataReducers } from './stores/ngrx/reducer/testdata.reducer';
import { TestDataEffects } from './stores/ngrx/effects/testdata.effects';
import { NrgxStoreModule } from './stores/ngrx/ngrx-store.module';


@NgModule({
  declarations: [
    TestNgrxComponent,
    TestMobxComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    HttpClientModule,
    NrgxStoreModule
  ]
})
export class TestModule { }
