import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressInformationComponent } from './registration-information/address-information/address-information.component';
import { CreditCardInformationComponent } from './registration-information/credit-card-information/credit-card-information.component';
import { RegistrationInformationComponent } from './registration-information/registration-information.component';
import { PersonalInformationComponent } from './registration-information/personal-information/personal-information.component';
import { PowersInformationComponent } from './registration-information/powers-information/powers-information.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressInformationComponent,
    CreditCardInformationComponent,
    RegistrationInformationComponent,
    PersonalInformationComponent,
    PowersInformationComponent
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
