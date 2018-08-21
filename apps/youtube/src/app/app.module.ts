import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { YoutubeService } from './youtube.service';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'libs/app-material.module';
import { YoutubeInterceptor } from '../shared/youtube.interceptor';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VideoListComponent } from './video/video-list/video-list.component';
import { VideoDetailsComponent } from './video/video-details/video-details.component';

const routes = [
  { component: VideoComponent, path: 'video' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoComponent,
    VideoListComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true}, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
