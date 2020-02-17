import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestViewRootComponent } from './test-view-root/test-view-root.component';
import { LoginNGRXComponent } from './child-components/loginNGRX/loginNGRX.component';

const routes = [
    {
        path: 'test',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginNGRXComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestViewRoutingModule { }
