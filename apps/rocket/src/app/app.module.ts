import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { AppMaterialModule } from "libs/app-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RocketListComponent } from './rocket-list/rocket-list.component';
import { RocketDetailsComponent } from './rocket-details/rocket-details.component';
import {RocketService} from "./rocket.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RocketListComponent,
    RocketDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [RocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
