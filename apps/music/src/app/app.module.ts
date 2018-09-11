import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonDataModule } from '../shared/common-data.module';
import { MusicListComponent } from './music-list/music-list.component';
import { AppMaterialModule } from '../../../../libs/app-material.module';
import { MusicDetailsComponent } from './music-details/music-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    MusicDetailsComponent
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
