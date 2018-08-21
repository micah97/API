import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { TokenInterceptor } from '../shared/token.interceptor';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'libs/app-material.module';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumDetailsComponent } from './album/album-details/album-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const routes = [
  { path: 'spotify', component: AlbumComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
    AlbumComponent,
    LoginComponent
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
