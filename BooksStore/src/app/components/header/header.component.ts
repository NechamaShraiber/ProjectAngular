import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName:string="guest";
userProfile:string="add picture!!!!!!!!!!!";
  constructor() { }

  ngOnInit() {
  }

}
