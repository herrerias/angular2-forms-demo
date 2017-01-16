import {AbstractControl} from "@angular/forms";

export const postCodeValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const postcode = control.get('postcode');

  if( !postcode ){
    return null;
  }
  return postcode.value.match(/\d{5}/) ? null : {invalidPostCode: true};
}
