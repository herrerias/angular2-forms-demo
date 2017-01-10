import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  public sides = [
    {value: 'L', display: 'Light Side', color: 'primary'},
    {value: 'D', display: 'Dark Side', color: 'danger'}
  ];

  @Input('group')
  personalForm: FormGroup;

  ngOnInit() {
  }

}
