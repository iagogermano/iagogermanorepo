import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { myfirstcomponent } from'./myfirst.component';
import { MysecondComponent } from './mysecond/mysecond.component'

@NgModule({
  declarations: [
    AppComponent,
    myfirstcomponent,
    MysecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
