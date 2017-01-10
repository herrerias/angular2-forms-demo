import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.css']
})
export class AddressInformationComponent implements OnInit {
  @Input('group')
  addressForm: FormGroup;
  @Input('trash')
  showTrash: boolean;
  @Output()
  addressChange = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  initAddress() {
    return this.fb.group({
      street: ['', Validators.required],
      postcode: [''],
    });
  }

  private removeAddress() {
    console.log('event capturado');
    this.addressChange.emit({
      value: 'Lo que sea'
    });
  }

  isRequired(control: FormControl): boolean {
    return control.hasError("required") && control.touched;
  }
}
