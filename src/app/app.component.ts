import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms";

function postCodeValidator(postcode: FormControl): {[s: string]: boolean} {
  if( !postcode.value.match(/\d{5}/)){
    return {invalidPostCode: true};
  }else {
    return {invalidPostCode: false};
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      id: [(<FormArray>this.myForm.controls['addresses']).length+1],
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

  cambio(event: any){
    this.buttonSide = event['value'];
  }

  getPersonalInformation(){
    return <FormGroup>this.myForm.controls['personal'];
  }

  save(model: any) {
    // call API to save
    // ...
    console.log(model);
  }
}
