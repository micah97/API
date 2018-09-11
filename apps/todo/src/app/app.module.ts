import { FormsModule } from '@angular/forms';
import { NxModule } from '@nrwl/nx';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonDataModule } from '../shared/common-data.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppMaterialModule } from 'libs/app-material.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoDetailsComponent],
  imports: [
    FormsModule,
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
