import { Component,  ViewEncapsulation } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
<<<<<<< HEAD
export class AccountComponent implements OnInit {
 isAnonymous:Boolean;
  constructor() {
    this.isAnonymous=localStorage["user"]?true:false;
  
  }
  ngOnInit() {
    this.isAnonymous=localStorage["user"]?true:false;
=======
export class AccountComponent  {

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

>>>>>>> ab628d5252cfc94eeda1c4688cead41275532d9c
  }
  

}
