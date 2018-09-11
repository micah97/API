import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { CommonDataModule } from '../shared/common-data.module';
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
    CommonDataModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
