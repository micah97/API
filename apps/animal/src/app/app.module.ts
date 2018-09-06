import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalDetailsComponent
  ],
  imports: [
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
