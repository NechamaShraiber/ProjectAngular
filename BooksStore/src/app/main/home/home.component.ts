import { Component, OnInit } from '@angular/core';
import { Store } from '../../shared/models/store.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
store:Store;
  constructor() {
    this.store=new Store();
    this.store.id=1;
    this.store.name="Look in book";
    this.store.city="beni-brak";
    this.store.street="rabi Akiva";
    this.store.numHouse=45;
    this.store.picture="../../../assets/Images/StoreImg.jpg";

   }

  ngOnInit() {
  }

}
