import { HttpClientModule } from '@angular/common/http';
import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AirListComponent } from './air-list/air-list.component';
import { AppMaterialModule } from '../../../../libs/app-material.module';
import { AirDetailsComponent } from './air-details/air-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AirDetailsComponent,
    AirListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
