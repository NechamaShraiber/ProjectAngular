import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authenticating.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 isAnonymous:Boolean;
  constructor(private authenticationService:AuthenticationService) { 

    this.isAnonymous=this.authenticationService.isAnonymous;

    this.authenticationService.isAnonymousSubject.subscribe({
      next:(isAno:boolean)=>{this.authenticationService.isAnonymous=isAno;console.log(this.authenticationService.isAnonymous)}
    })
  }

  ngOnInit() {
  }

}
