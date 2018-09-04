import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartBooks:any[];
  constructor(private bookService:BooksService) {
    this.bookService.subject.subscribe(
      {
        next: (book:any) => this.removeBook(book)
      }
    );
   }

  ngOnInit() {
   this.cartBooks=this.getCurrentList();
  }
  getCurrentList() {
    let list = localStorage.getItem("cart");  
    return (list) ? JSON.parse(list) : [];
}
removeBook(book:any)
{
  let index=this.cartBooks.indexOf(book);
  this.cartBooks.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(this.cartBooks));
}

}
