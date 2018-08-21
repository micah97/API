import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from 'libs/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../shared/token.interceptor';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyAlbumComponent } from './spotify/spotify-album/spotify-album.component';
import { SpotifyDetailsComponent } from './spotify/spotify-details/spotify-details.component';

const routes = [
  { component: SpotifyComponent, path: 'spotify' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpotifyComponent,
    SpotifyAlbumComponent,
    SpotifyDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
