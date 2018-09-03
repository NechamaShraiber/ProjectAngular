import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 isAnonymous:Boolean;
  constructor() {
    this.isAnonymous=localStorage["user"]?true:false;
  }

  ngOnInit() {
    this.isAnonymous=localStorage["user"]?true:false;
  }

}
