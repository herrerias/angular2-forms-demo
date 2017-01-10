import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-credit-card-information',
  templateUrl: './credit-card-information.component.html',
  styleUrls: ['./credit-card-information.component.css']
})
export class CreditCardInformationComponent implements OnInit {
  @Input('group')
  public creditCardForm: FormGroup;

  ngOnInit() {
  }

}
