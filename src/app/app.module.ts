import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { CreditCardInformationComponent } from './credit-card-information/credit-card-information.component';
import { RegistrationInformationComponent } from './registration-information/registration-information.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PowersInformationComponent } from './powers-information/powers-information.component';

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
