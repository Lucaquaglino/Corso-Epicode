import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
