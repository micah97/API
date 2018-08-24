import { HttpClientModule } from '@angular/common/http';
import { SoccerService } from './soccer.service';
import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TeamListComponent } from './team-list/team-list.component';
import { AppMaterialModule } from '../../../../libs/app-material.module';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot()
  ],
  providers: [SoccerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
