import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AccountComponent implements OnInit {
<<<<<<< HEAD
 isAnonymous:Boolean=false;
  constructor(private userService:UserService) { 
   if(localStorage["user"])
     this.isAnonymous=true;
    console.log(this.isAnonymous);
 this.userService.subAnonymous.subscribe(
    {
      
      next: (b:boolean)=> {this.isAnonymous =b;
     }
    }
  );
  }
 
  deleteUserFromLocalStorage()
  {
this.userService.deleteUserFromLocalStorage();
=======
 isAnonymous:Boolean;
<<<<<<< HEAD
  constructor() {
    this.isAnonymous=localStorage["user"]?true:false;
=======
  constructor() { 

>>>>>>> e94bbca506ae720b870bd3ee7ab4e283c1484ad6
>>>>>>> 9fc854466b094f8ffade2fcba84b436017e5fb62
  }
  ngOnInit() {
    this.isAnonymous=localStorage["user"]?true:false;
  }

}
