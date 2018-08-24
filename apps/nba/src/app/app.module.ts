import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { NbaService } from './nba.service';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '../../../../libs/app-material.module';
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
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [NbaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
