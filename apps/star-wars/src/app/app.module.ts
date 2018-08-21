import { AppMaterialModule } from 'libs/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { SelectedPlanetComponent } from './selected-planet/selected-planet.component';
import { PlanetsService } from './planet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    SelectedPlanetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot()
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
