import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { CommonDataModule } from '../shared/common-data.module';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    FruitDetailsComponent
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
