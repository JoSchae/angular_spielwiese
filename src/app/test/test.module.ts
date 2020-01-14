import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule,
    HttpClientModule,
  ]
})
export class TestModule { }
