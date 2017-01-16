import {AbstractControl} from "@angular/forms";

export const postCodeValidator = (control: AbstractControl): {[s: string]: boolean} => {
  const postcode = control.get('postcode');

  if( postcode.value.match(/\d{5}/)){
    return {invalidPostCode: false};
  }else{
    return {invalidPostCode: true};
  }
}
