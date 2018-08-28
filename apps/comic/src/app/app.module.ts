import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { ComicService } from './comic.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './../../../../libs/app-material.module';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicSearchComponent } from './comic-search/comic-search.component';

@NgModule({
  declarations: [AppComponent, ComicDetailsComponent, ComicSearchComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NxModule.forRoot()
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule {}
