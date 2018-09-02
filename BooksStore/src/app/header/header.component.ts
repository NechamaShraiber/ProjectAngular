import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string = "guest";
  userProfile: string = "https://www.drupal.org/files/profile_default.jpg";
  isAnonymous: boolean;
  constructor() {
    // check realy from the local storage!!!!!!!!!!!!!
    if (localStorage["user"])
      this.isAnonymous = true;
    else this.isAnonymous = false;
  }

  ngOnInit() {
  }

}
