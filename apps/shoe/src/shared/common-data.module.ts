import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateModule } from './state/state.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    StateModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: []
})

export class CommonDataModule {
}
