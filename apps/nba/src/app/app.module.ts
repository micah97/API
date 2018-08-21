import { HttpClientModule } from '@angular/common/http';
import { NbaService } from './nba.service';
import { AppMaterialModule } from 'libs/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersDetailsComponent } from './players-details/players-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayersDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot()
  ],
  providers: [NbaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
