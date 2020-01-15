import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContainerComponent } from './components/container/users/users-container.component';

const routes: Routes = [
    {
        path: 'test',
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full'},
            { path: 'users', component: UsersContainerComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
