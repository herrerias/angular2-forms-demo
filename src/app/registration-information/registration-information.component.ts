import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms";

function postCodeValidator(postcode: FormControl): {[s: string]: boolean} {
  if( !postcode.value.match(/\d{5}/)){
    return {invalidPostCode: true};
  }else {
    return {invalidPostCode: false};
  }
}

@Component({
  selector: 'app-registration-information',
  templateUrl: './registration-information.component.html',
  styleUrls: ['./registration-information.component.css']
})
export class RegistrationInformationComponent implements OnInit {
  myForm: FormGroup;
  buttonSide: string = "primary";

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      personal: this._fb.group({
        side: ['L'],
        name: ['', [Validators.required, Validators.minLength(5)]],
        master: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        planet: [''],
        mail: ['', Validators.required],
      }),
      powers: [],
      addresses: this._fb.array([])
    });

    this.addAddress();
  }

  initAddress() {
    return this._fb.group({
      id: [(<FormArray>this.myForm.controls['addresses']).length + 1],
      street: ['', Validators.required],
      postcode: [''],
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    const addressGroup = this.initAddress();
    control.push(addressGroup);
  }

  removeAddress(index: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(index);
  }

  sideChanged(event: any) {
    this.buttonSide = event['value'];
  }

  save(model: any) {
    // call API to save
    // ...
    console.log(model);
  }

}
