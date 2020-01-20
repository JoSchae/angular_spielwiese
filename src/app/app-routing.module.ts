import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestViewRootComponent } from './test-view/test-view-root/test-view-root.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
