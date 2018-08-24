import { HttpClientModule } from '@angular/common/http';
import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MusicService } from './music.service';
import { BrowserModule } from '@angular/platform-browser';
import { MusicListComponent } from './music-list/music-list.component';
import { AppMaterialModule } from '../../../../libs/app-material.module';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { MusicDetailsComponent } from './music-details/music-details.component';

@NgModule({
  declarations: [AppComponent, MusicListComponent, MusicDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule {}
