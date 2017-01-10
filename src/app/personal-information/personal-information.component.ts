import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

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
  @Output()
  sideChanged = new EventEmitter();

  ngOnInit() {
    this.personalForm.controls['side'].valueChanges.subscribe(value => {
      this.changeSide(value);
    })
  }

  private isValid(control: FormControl): boolean {
    return !control.valid && control.touched;
  }

  private isRequired(control: FormControl): boolean {
    return control.hasError("required") && control.touched;
  }

  private getSideColor(_side: string): any{
      return this.sides.filter(side => {
        return side.value === _side;
      })[0]['color'];
  }

  private changeSide(side: any) {
    this.sideChanged.emit({
      value: this.getSideColor(side)
    });
  }

}
