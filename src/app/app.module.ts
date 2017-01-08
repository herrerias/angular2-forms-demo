import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { CreditCardInformationComponent } from './credit-card-information/credit-card-information.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressInformationComponent,
    CreditCardInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
