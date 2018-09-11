import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ShoesEffects } from './shoes.effects';
import { reducers } from '..';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([ShoesEffects]),
  ],
  declarations: []
})
export class StateModule { }
