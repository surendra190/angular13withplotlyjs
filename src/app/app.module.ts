import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyExampleComponent } from './plotly-example/plotly-example.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    PlotlyExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , PlotlyModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
