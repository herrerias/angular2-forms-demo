import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";

const POWERS: any[] = [
  {value: '1', side: 'L', display: 'Force Speed', color: 'primary'},
  {value: '2', side: 'L', display: 'Force Leap or Force Jump', color: 'primary'},
  {value: '3', side: 'L', display: 'Force Pull and Force Push', color: 'primary'},
  {value: '4', side: 'L', display: 'Force Throw', color: 'primary'},
  {value: '5', side: 'L', display: 'Force Persuasion', color: 'primary'},
  {value: '6', side: 'L', display: 'Force Healing', color: 'primary'},
  {value: '7', side: 'L', display: 'Force Control Pain', color: 'primary'},
  {value: '8', side: 'L', display: 'Force Levitation', color: 'primary'},
  {value: '9', side: 'L', display: 'Force Sense', color: 'primary'},
  {value: '10', side: 'L', display: 'Force Enhancement', color: 'primary'},
  {value: '11', side: 'L', display: 'Force Shield', color: 'primary'},
  {value: '12', side: 'L', display: 'Farseeing', color: 'primary'},
  {value: '13', side: 'L', display: 'Force Masking', color: 'primary'},
  {value: '14', side: 'L', display: 'Force of Peace Aura', color: 'primary'},
  {value: '15', side: 'L', display: 'Force of Light Illumination', color: 'primary'},
  {value: '16', side: 'L', display: 'Force Resonate', color: 'primary'},
  {value: '17', side: 'L', display: 'Force Electronic Communication', color: 'primary'},
  {value: '18', side: 'D', display: 'Force Speed', color: 'danger'},
  {value: '19', side: 'D', display: 'Force Leap or Force Jump', color: 'danger'},
  {value: '20', side: 'D', display: 'Force Pull and Force Push', color: 'danger'},
  {value: '21', side: 'D', display: 'Force Throw', color: 'danger'},
  {value: '22', side: 'D', display: 'Force Persuasion', color: 'danger'},
  {value: '23', side: 'D', display: 'Force Control Pain', color: 'danger'},
  {value: '24', side: 'D', display: 'Force Levitation', color: 'danger'},
  {value: '25', side: 'D', display: 'Force Sense', color: 'danger'},
  {value: '26', side: 'D', display: 'Force Enhancement', color: 'danger'},
  {value: '27', side: 'D', display: 'Force Shield', color: 'danger'},
  {value: '28', side: 'D', display: 'Farseeing', color: 'danger'},
  {value: '29', side: 'D', display: 'Force Masking', color: 'danger'},
  {value: '30', side: 'D', display: 'Force Dark Aura', color: 'danger'},
  {value: '31', side: 'D', display: 'Force of Shadow', color: 'danger'},
  {value: '32', side: 'D', display: 'Force Choke Hold', color: 'danger'},
  {value: '33', side: 'D', display: 'Force Electronic Communication', color: 'danger'}
];

@Component({
  selector: 'app-powers-information',
  templateUrl: './powers-information.component.html',
  styleUrls: ['./powers-information.component.css']
})
export class PowersInformationComponent implements OnInit {
  private powers: any[];
  private currentPowers: any[];

  @Input('side')
  side: string;
  @Input('group')
  powersForm: FormControl;

  ngOnInit() {
    this.initPowers();
    console.log(this.side);
  }

  private initPowers(){
    this.powers = POWERS.slice();
    this.currentPowers = [];
    this.powersForm.setValue(this.currentPowers);
  }

  private getPowers(): any[] {
    return this.powers.filter(power => {
      return power.side === this.side;
    });
  }

  private getPowerIndex(value: string): number{
    return this.powers.map(power => {
      return power.value;
    }).indexOf(value);
  }

  private addPower(power: any){
    this.currentPowers.push(power);
    this.powers.splice(this.getPowerIndex(power.value), 1);
  }

  //TODO:  A veces borra varios de una tacada.
  private removePower(power: any, index: number){
    this.powers.push(power);
    this.currentPowers.splice(index);
  }

  ngOnChanges(changes: SimpleChanges) {
    if( changes['side'].currentValue !== changes['side'].previousValue ){
      this.initPowers();
    }
  }

}
