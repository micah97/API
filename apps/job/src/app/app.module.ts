import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { JobService } from './job.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot()
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule {}
