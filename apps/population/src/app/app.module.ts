import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PopulationListComponent } from './population-list/population-list.component';
import { PopulationDetailsComponent } from './population-details/population-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "libs/app-material.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PopulationListComponent,
    PopulationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
