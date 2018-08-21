import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
// import { AppMaterialModule } from "../../../../libs/app-material.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    // AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AppMaterialModule,
    NxModule.forRoot()
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
