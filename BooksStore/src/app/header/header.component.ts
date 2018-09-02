import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string = "guest";
  userProfilePicture: string = "https://www.drupal.org/files/profile_default.jpg";
  isAnonymous: boolean;

  constructor() {
    if (localStorage["user"]) {
      this.isAnonymous = true;
      this.userName=localStorage["user"].UserName;
      this.userProfilePicture=localStorage["user"].profilePicture;
    }
    else this.isAnonymous = false;
  }

  ngOnInit() {
  }

  
}
