import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { DogService } from './dog.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DogListComponent } from './dog-list/dog-list.component';
import { AppMaterialModule } from 'libs/app-material.module';
import { DogDetailsComponent } from './dog-details/dog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot()
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
