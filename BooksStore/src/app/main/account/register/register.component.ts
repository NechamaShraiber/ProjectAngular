import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { AuthenticationService } from '../../../shared/services/authenticating.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formGroup: FormGroup;
  obj: typeof Object = Object;
  registerForm: any;
  isAnonymous:Boolean;
  // profilePicture:FormControl;
  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
    this.initFormgroup();
    this.isAnonymous=this.authenticationService.isAnonymous;

  }

  initFormgroup() {
    let formGroupConfig = {
      FirstName: new FormControl("First Name", this.createValidatorArr("FirstName", 2, 15, /^[a-zA-Z]*$/)),
      LastName: new FormControl("Last Name", this.createValidatorArr("LastName", 2, 15, /^[a-zA-Z]*$/)),
      UserName: new FormControl("User Name", this.createValidatorArr("UserName", 4, 15, /^[a-zA-Z]*$/)),
      Password: new FormControl("Password", this.createValidatorArr("password", 5, 10, /^[a-zA-Z0-9]*$/))
    };
    // this.profilePicture=new FormControl();
    this.formGroup = new FormGroup(formGroupConfig);
  }
  submitRegister() {
    console.log(this.formGroup.value);
    localStorage.setItem('user', JSON.stringify(this.formGroup.value));
    this.authenticationService.isAnonymousSubject.next(true);
    this.userService.addUser(this.formGroup.value);
  }

  createValidatorArr(cntName: string, min: number, max: number, reg: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<string>f.value.match(reg) ? cntName == 'password' ? { "val": `${cntName} must contains  english letters or numbers` } :
        { "val": `${cntName} must contains only english letters` } : null

    ];
  }

}
