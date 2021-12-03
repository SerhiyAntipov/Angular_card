import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import localeUa from '@angular/common/locales/ru-UA'

import { AppComponent } from './app.component';
import { CardComponent } from "./card/card.component";

registerLocaleData(localeUa, 'ua')


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
