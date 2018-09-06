import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CurrencyListComponent, CurrencyDetailsComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
