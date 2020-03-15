import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeruyaComponentModule } from 'projects/teruya-component/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeruyaComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
