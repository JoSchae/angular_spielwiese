import { NgModule } from '@angular/core';
import { TestDataFacade } from './facades/testdata.facade';
import { TestDataFacadeImpl } from './facades/testdata-impl.facade';
import { StoreModule } from '@ngrx/store';
import { testDataReducers } from './reducer/testdata.reducer';
import { TestDataEffects } from './effects/testdata.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        StoreModule.forFeature('data', testDataReducers),
        EffectsModule.forFeature([TestDataEffects]),
    ],
    providers: [
        {
            provide: TestDataFacade,
            useClass: TestDataFacadeImpl
        }
    ]
})
export class NrgxStoreModule { }
