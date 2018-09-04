import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 // userName: string = "guest";
//  userProfilePicture: string = "https://www.drupal.org/files/profile_default.jpg";
 isAnonymous: boolean;
user= new User();
  constructor() {
    if (localStorage["user"]) {
      this.isAnonymous = true;
      this.userName=localStorage["user"]["UserName"];
      this.userProfilePicture=localStorage["user"].profilePicture;
      this.user=localStorage["user"];
    }
    else this.isAnonymous = false;
  
  }

  ngOnInit() {
  }


}
