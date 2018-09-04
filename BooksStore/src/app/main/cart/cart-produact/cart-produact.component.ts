import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { BooksService } from '../../../shared/services/books.service';

@Component({
  selector: 'app-cart-produact',
  templateUrl: './cart-produact.component.html',
  styleUrls: ['./cart-produact.component.css']
})
export class CartProduactComponent implements OnInit {
  @Input() book:any;
  constructor(private router:Router, private bookService:BooksService) { }

  ngOnInit() {
  
  }
  removeFromCart()
  {
    
      this.bookService.subject
      .next(this.book);
  }
  getCurrentList() {
    let list = localStorage.getItem("cart"); 
    return (list) ? JSON.parse(list) : [];
}
}
