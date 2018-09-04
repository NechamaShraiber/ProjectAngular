import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
books:any[]=[];
  constructor(private bookService:BooksService) {
    this.books=this.bookService.getAllBooks();
   }

  ngOnInit() {
  }
  onKeyUp(event) {
     this.books=this.bookService.getBooks(event.target.value);
  }
  
}
