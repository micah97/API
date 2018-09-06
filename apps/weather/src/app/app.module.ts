import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, WeatherListComponent, WeatherDetailsComponent],
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
