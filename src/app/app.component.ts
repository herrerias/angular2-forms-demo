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
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([]),
      creditCards: this._fb.array([])
    });

    // add address
    this.addAddress();
    this.addCreditCard();
    /* subscribe to addresses value changes */
    // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    const addressGroup = this.initAddress();

    control.push(addressGroup);

    /* subscribe to individual address value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  initCreditCard() {
    return this._fb.group({
      number: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      ccv: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  addCreditCard() {
    const control = <FormArray>this.myForm.controls['creditCards'];
    const creditCardGroup = this.initCreditCard();

    control.push(creditCardGroup);

    /* subscribe to individual address value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  removeCreditCard(i: number) {
    const control = <FormArray>this.myForm.controls['creditCards'];
    control.removeAt(i);
  }

  save(model: Customer) {
    // call API to save
    // ...
    console.log(model);
  }
}
