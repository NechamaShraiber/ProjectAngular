import { Component,  } from '@angular/core';
import { FormGroup, FormControl,AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {
  formGroup: FormGroup;
  obj: typeof Object = Object;
  constructor() { 
    let formGroupConfig = {
    FirstName: new FormControl("Anonimy", this.createValidatorArr("FirstName", 2, 15, /^[a-zA-Z]*$/), ),
     LastName: new FormControl("Anonimy", this.createValidatorArr("LastName", 2, 15,/^[a-zA-Z]*$/)),
     UserName: new FormControl("Anonimy", this.createValidatorArr("UserName", 4, 15,/^[a-zA-Z]*$/)),
    Password: new FormControl("12345", this.createValidatorArr("password", 5, 10,/^[a-zA-Z0-9]*$/ ))
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  submitLogin() {
    console.log(this.formGroup.value);
    console.log(this.formGroup.controls);
    alert(this.formGroup.status)
  }
//   pattern(cntName: string) : Array<ValidatorFn> {
//     return [f=>f.value&& <string>f.value.match(/a-zA-Z/) ? { "val": `${cntName} is  english` } : null]
// }
  createValidatorArr(cntName: string, min: number, max: number, reg: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f=>f.value&& !<string>f.value.match(reg) ?cntName=='password'?{ "val": `${cntName} must contains  english letters or numbers` }:
       { "val": `${cntName} must contains only english letters` } : null
   
    ];
  }
}
