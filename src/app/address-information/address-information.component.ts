import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.css']
})
export class AddressInformationComponent implements OnInit {
  @Input('group')
  public addressForm: FormGroup;

  ngOnInit() {
  }
}
