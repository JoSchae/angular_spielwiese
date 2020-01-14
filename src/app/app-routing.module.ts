import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const rootRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
