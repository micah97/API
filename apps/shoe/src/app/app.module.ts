import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { CommonDataModule } from '../shared/common-data.module';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeListComponent,
    ShoeDetailsComponent
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
