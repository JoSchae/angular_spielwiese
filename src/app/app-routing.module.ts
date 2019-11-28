import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users/users.component';


export const rootRoutes: Routes = [
    // {
    //     path: 'users',
    //     component: UsersComponent,
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
