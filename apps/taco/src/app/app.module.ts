import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { TacoSearchComponent } from './taco-search/taco-search.component';
import { TacoDetailsComponent } from './taco-details/taco-details.component';

@NgModule({
  declarations: [AppComponent, TacoSearchComponent, TacoDetailsComponent],
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
