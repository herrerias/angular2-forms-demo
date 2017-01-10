import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {Customer} from "./customer.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm: FormGroup;

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

    this.addAddress(null);
  }

  initAddress() {
    return this._fb.group({
      id: [(<FormArray>this.myForm.controls['addresses']).length+1],
      street: ['', Validators.required],
      postcode: [''],
    });
  }

  addAddress(event) {
    const control = <FormArray>this.myForm.controls['addresses'];
    const addressGroup = this.initAddress();
    control.push(addressGroup);
  }

  removeAddress(event: any, index: number) {
    console.log(event);
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(index);
  }

  getPersonalInformation(){
    return <FormGroup>this.myForm.controls['personal'];
  }

  save(model: Customer) {
    // call API to save
    // ...
    console.log(model);
  }
}
