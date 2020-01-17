import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './AppComponent/app.component';

export const rootRoutes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
