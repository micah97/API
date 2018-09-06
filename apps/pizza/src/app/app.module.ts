import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { CommonDataModule } from '../shared/common-data.module';
import { TacoListComponent } from './taco-list/taco-list.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { TacoDetailsComponent } from './taco-details/taco-details.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    TacoListComponent,
    TacoDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonDataModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
