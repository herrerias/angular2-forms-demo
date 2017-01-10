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

  private removeAddress() {
    this.addressChange.emit();
  }

  private isRequired(control: FormControl): boolean {
    return control.hasError("required") && control.touched;
  }

  private invalidPostCode(control: FormControl): boolean {
    return control.hasError("invalidPostCode");
  }
}
