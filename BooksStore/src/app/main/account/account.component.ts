import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 isAnonymous:Boolean;
<<<<<<< HEAD
  constructor() {
    this.isAnonymous=localStorage["user"]?true:false;
=======
  constructor() { 

>>>>>>> e94bbca506ae720b870bd3ee7ab4e283c1484ad6
  }

  ngOnInit() {
    this.isAnonymous=localStorage["user"]?true:false;
  }

}
