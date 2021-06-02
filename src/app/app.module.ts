import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ComponentNameComponent } from './component-name/component-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
